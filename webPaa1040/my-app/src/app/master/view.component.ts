import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestSourceData } from 'src/app/model/rest.datasource';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  position = 'my-app'; 
  masterData; 
  commentData = {};

  constructor(private route:ActivatedRoute,private data: RestSourceData){
    this.data.getMessage();
  }

  ngOnInit(){
    if(this.data.messages.length>0){
      this.position = this.route.snapshot.params['id'];
      let filteredData = this.data.messages.filter(
        (master) => master.position.indexOf(this.position) !== -1
      );
      this.masterData = filteredData[0];      
    }
  }

  addComment(){    
    this.commentData["position"] = this.position;    
    this.masterData.comments.push(this.commentData);
    this.data.postComment(this.commentData);
    this.commentData = {};
  }

  
}