import { Component } from '@angular/core';
import { RestSourceData } from "../model/rest.datasource";
import { localeData } from 'moment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']  
})
export class AccountComponent {  
  position;
  btnToggle=false;
  backgroundColor: string = 'white';
  isValid : boolean = false;
  account
  constructor(private route: ActivatedRoute,private data: RestSourceData){}

  ngOnInit(){    

    this.position = this.route.snapshot.params['id'];
    this.data.getUser(this.position);       

    this.account = JSON.parse(localStorage.getItem("currentUser"));   
    // console.log(this.account.username);
    // console.log(this.position);
    // if(this.position==this.account.username){
    //   this.isValid=true;
    // }else{
    //   this.isValid=false;
    // }
    
  }
  toggle(){
    
    this.btnToggle = !this.btnToggle;
  }
  Post(){

    if(this.btnToggle){
      this.toggle();
    }
  }
  mouseEnter(){
    this.backgroundColor = 'gray';    
  }  
  mouseLeave(){
    this.backgroundColor = 'white';    
  }

}