import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  username: string;
  userDetail: any;
  repos: any;

  
  constructor() { }

  ngOnInit(): void {}
  
  }

