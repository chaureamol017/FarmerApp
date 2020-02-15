import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbid',
  templateUrl: './addbid.component.html',
  styleUrls: [
    './addbid.component.scss',
    '../../../common/commonStyle.scss'
  ]
})
export class AddbidComponent implements OnInit {

  productSaveform;
  selectedData: any;
  selectedProductName: any;
  formTitle: any = "Bid For";
  constructor(
    private dialogRef: MatDialogRef<AddbidComponent>
  ) { }

  ngOnInit() {
    var refData = this.dialogRef._containerInstance._config.data;
    this.selectedData = refData.selectedData;
    this.selectedProductName = this.selectedData.productName;

    if (refData.isEdit) {
      var selectedBidData = refData.selectedBidData;
      this.productSaveform = new FormGroup({
        bidAmount: new FormControl(selectedBidData.bidAmount, [Validators.required])
      });
    } else {
      this.productSaveform = new FormGroup({
        bidAmount: new FormControl('', [Validators.required])
      });
    }
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
}
