import { Component } from '@angular/core';
import { RestSourceData } from "./model/rest.datasource";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  account;
  position;
  constructor(private route:ActivatedRoute,private data: RestSourceData){}

  ngOnInit(){
    this.position = this.route.snapshot.params['id'];
    this.account = JSON.parse(localStorage.getItem("currentUser"));    
  }

  logoff(){
    this.data.logout();
  }
}
