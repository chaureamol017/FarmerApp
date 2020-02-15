import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/classes/user-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
  ) {
    let loggedInUser: UserDetails = new UserDetails();
    loggedInUser.name = "Sachn";
    loggedInUser.emailId = "Sachn@mailinator.com";
  }

  ngOnInit() {
  }

}
