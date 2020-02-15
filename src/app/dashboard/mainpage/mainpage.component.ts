import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/classes/user-details';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  sideBarOpen = true;
  sideBarIndex = 0;
  loggedInUser: UserDetails;
  constructor() {
    
    this.loggedInUser = new UserDetails();
    this.loggedInUser.name = "Sachin";
    this.loggedInUser.emailId = "Sachn@mailinator.com";
    this.loggedInUser.role = "Buyer";
    // this.loggedInUser.role = "Farmer";
  }

  ngOnInit() {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  switchSideBarContent($event) {
    this.sideBarIndex = $event;
  }

}
