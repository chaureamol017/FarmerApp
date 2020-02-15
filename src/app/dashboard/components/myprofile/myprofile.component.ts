import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: [
    './myprofile.component.scss',
    '../../../common/commonStyle.scss'
  ]
})
export class MyprofileComponent implements OnInit {

  myProfileForm;
  formTitle: any = "My Profile";
  constructor(
    private dialogRef: MatDialogRef<MyprofileComponent>
  ) { }

  ngOnInit() {
    var refData = this.dialogRef._containerInstance._config.data;
    var selectedData = refData.selectedData;

    var selectedBidData = refData.selectedBidData;
    this.myProfileForm = new FormGroup({
      firstName: new FormControl(selectedBidData.firstName, [Validators.required])
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
