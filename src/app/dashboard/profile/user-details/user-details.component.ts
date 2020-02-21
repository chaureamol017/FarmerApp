import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDetailsForm;
  constructor(
    private userService: UserService
  ) {
    var firstName = localStorage.getItem("firstName") ? localStorage.getItem("firstName") : "";
    var middleName = localStorage.getItem("middleName") ? localStorage.getItem("middleName") : "";
    var lastName = localStorage.getItem("lastName") ? localStorage.getItem("lastName") : "";
    var emailId = localStorage.getItem("emailId") ? localStorage.getItem("emailId") : "";
    var mobile = localStorage.getItem("mobile") ? localStorage.getItem("mobile") : "";

    this.userDetailsForm = new FormGroup({
      firstName: new FormControl(firstName, [Validators.required]),
      middleName: new FormControl(middleName, []),
      lastName: new FormControl(lastName, [Validators.required]),
      emailId: new FormControl(emailId, [Validators.required]),
      mobile: new FormControl(mobile, [Validators.required]),
    });
  }

  ngOnInit() {
  }

  saveUserDetailsForm(userDetailsForm) {
    
  }

}
