import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
// import { Product } from '../../classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [
    './product.component.scss',
    '../../common/commonStyle.scss'
  ]
})
export class ProductComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProductComponent>
  ) { }

  // product: Product = new Product();
  product: any = {};
  productSaveform;
  formTitle: any = "";
  ngOnInit() {
    var refData = this.dialogRef._containerInstance._config.data;
    if (refData.isEdit) {
      var selectedData = refData.selectedData;

      this.formTitle = "Edit Product";
      this.productSaveform = new FormGroup({
        productName: new FormControl(selectedData.productName, [Validators.required]),
        description: new FormControl(selectedData.description),
        grade: new FormControl(selectedData.gradeid),
      });

    } else {
      this.formTitle = "Add Product";
      this.productSaveform = new FormGroup({
        // productName: new FormControl('', [Validators.required, Validators.minLength(5)]),
        productName: new FormControl('', [Validators.required]),
        description: new FormControl(),
        grade: new FormControl(),
      });
    }

  }


  saveProduct(saveProduct) {
    // this.product = new Product();
    this.product = {};
    this.product.productName = this.ProductName.value;
    this.product.grade = this.ProductGrade.value;

    this.save();
  }



  save() {
    // this.studentservice.createStudent(this.student)
    //   .subscribe(data => console.log(data), error => console.log(error));
    // this.product = new Product();


    this.closeDialog();
  }

  get ProductName() {
    return this.productSaveform.get('productName');
  }

  get ProductDescription() {
    return this.productSaveform.get('description');
  }

  get ProductGrade() {
    return this.productSaveform.get('grade');
  }



  closeDialog() {
    this.dialogRef.close();
  }
}

