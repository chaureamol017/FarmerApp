import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss',
    '../../../common/commonStyle.scss']
})
export class ChangePasswordComponent implements OnInit {

  productSaveform;
  selectedData: any;
  formTitle: any = "Change Password";
  constructor(
    private dialogRef: MatDialogRef<ChangePasswordComponent>
  ) { }

  ngOnInit() {
    var refData = this.dialogRef._containerInstance._config.data;
    this.selectedData = refData.selectedData;

      this.productSaveform = new FormGroup({
        oldPassword: new FormControl('', [Validators.required]),
        newPassword: new FormControl('', [Validators.required]),
        newPassword1: new FormControl('', [Validators.required])
      });
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
}
