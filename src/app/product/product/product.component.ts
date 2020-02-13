import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Product } from '../../classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  // product: Product = new Product();
  product: any = {};
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  productSaveform = new FormGroup({
    product_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    product_description: new FormControl(),
    product_grade: new FormControl(),
  });

  saveProduct(saveProduct) {
    // this.product = new Product();
    this.product = {};
    this.product.product_name = this.ProductName.value;
    this.product.product_grade = this.ProductGrade.value;
    this.submitted = true;
    this.save();
  }



  save() {
    // this.studentservice.createStudent(this.student)
    //   .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
  }

  get ProductName() {
    return this.productSaveform.get('product_name');
  }

  get ProductDescription() {
    return this.productSaveform.get('product_description');
  }

  get ProductGrade() {
    return this.productSaveform.get('product_grade');
  }


  addProductForm() {
    this.submitted = false;
    this.productSaveform.reset();
  }
}

