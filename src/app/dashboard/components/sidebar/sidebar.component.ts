import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserDetails } from 'src/app/classes/user-details';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() switchSideBarForMe: EventEmitter<any> = new EventEmitter();
  @Input('loggedInUser') loggedInUser: UserDetails = new UserDetails();

  activeLink: any = 0; 
  loggedInUserName: any;
  loggedInUserEmail: any;
  constructor() { }

  ngOnInit() {
    this.activeLink = 0; 
    // this.loggedInUserName = "Sachin";
    this.loggedInUserName = this.loggedInUser.name;
    this.loggedInUserEmail = "sachin@yopmail.com";
  }
  
  switchSideBar(clickedLink) {
    this.activeLink = clickedLink;

    this.switchSideBarForMe.emit(this.activeLink);
    // this.switchSideBarForMe.emit();
  }
}
