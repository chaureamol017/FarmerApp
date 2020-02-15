import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() switchSideBarForMe: EventEmitter<any> = new EventEmitter();
  activeLink: any = 0; 
  loggedInUser: any;
  loggedInUserEmail: any;
  constructor() { }

  ngOnInit() {
    this.loggedInUser = "Sachin";
    this.loggedInUserEmail = "sachin@yopmail.com";
  }
  
  switchSideBar(clickedLink) {
    this.activeLink = clickedLink;

    this.switchSideBarForMe.emit(this.activeLink);
    // this.switchSideBarForMe.emit();
  }
}
