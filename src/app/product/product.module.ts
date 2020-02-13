import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {
  MatTableModule, MatIconModule, MatPaginatorModule, MatButtonModule
} from '@angular/material';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule,
    
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,

  ],
  exports: [
    ProductComponent,
    ProductListComponent,
  ]
})
export class ProductModule { }
