var mongoose = require('mongoose');

module.exports = mongoose.model('post',{    
    position: String,
    date: String,
    description: String,
    value: Number,
    type: String,
    comments: [{
        name: String,
        comment: String
    }],
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})