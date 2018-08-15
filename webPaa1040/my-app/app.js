var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var app = express();
var mongoose = require('mongoose');

var User = require('./models/user.js');
var Post = require('./models/post.js');

app.use(express.static('static'));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

app.get('/posts',  async(req, res) =>{    
    var posts = await Post.find({})
    res.send(posts);
});

app.post('/users', async (req, res)=>{
    var userData = req.body;    
    var user = await User.findOne({username: userData.username});    
    res.send(user);    
});

app.get('/recapposts',  async(req, res) =>{    
    var posts = await Post.aggregate([{"$group":{"_id":"$type","total":{"$sum":"$value"}}}])
    res.send(posts);
});


app.post('/postcomment', (req, res)=>{

    console.log(req.body);
    var position = req.body.position
    var query = {'position':position};

    var comment = req.body.comment
    var post = Post.findOneAndUpdate({"position":position},{$push:{"comments":req.body}},function(err,doc){
        if(err){
            console.log("something wrong");
        }
        console.log("updated successfully");        
    });    
});
app.post('/post', (req, res)=>{

    var postData = req.body
    postData.author = '5ae1a7105a926e0f84230d61'

    var post = new Post(postData);

    post.save((err, result)=>{
        if(err){
            console.error('Saving Post Error');
            return res.status(500).send({message: 'Saving Post Causing an error'});
        }

        res.sendStatus(200);
    })
})

app.post('/register', function(req,res){
       
     var userData = req.body;
     console.log(userData);
     var user = new User(userData);

     user.save((err, newUser) =>{
        if(err){
            return res.status(401).send({message: 'Error Registering the User'})
        }else {
            var payload = { sub: newUser._id }

            var token = jwt.encode(payload, '123')
        
            res.status(200).send({token})
        }
    })
})

app.post('/login', async (req, res)=>{

    var userData = req.body;
    var user = await User.findOne({username: userData.username});
    console.log(user);
    if(!user){
        return res.status(401).send({message: 'Email or Password Invalid'})
    }

    bcrypt.compare(userData.password, user.password, (err, isMatch) =>{
        if(!isMatch){
            return res.status(401).send({message: 'Email or Password Invalid'})
        }
        
    var payload = { sub: user._id }

    var token = jwt.encode(payload, '123')

    res.status(200).send({token})
    })

})

mongoose.connect('mongodb://localhost:27017/meanstack',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})

app.listen(4201, function(){
  console.log("Listening from 4201...");
});
