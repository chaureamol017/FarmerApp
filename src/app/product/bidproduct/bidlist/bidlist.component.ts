import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-bidlist',
  templateUrl: './bidlist.component.html',
  styleUrls: [
    './bidlist.component.scss',
    '../../../common/commonStyle.scss'
  ]
})
export class BidlistComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['productName', 'productCategory', 'user', 'sellingRate', 'biddingRate', 'actions'];

  searchKey: string;
  selectedData: any;
  selectedProductName: any;
  formTitle: any = "View Bid For";

  constructor(
    private dialogRef: MatDialogRef<BidlistComponent>
  ) { }

  ngOnInit() {
    var array = [{
      productName: "Amol",
      productCategory: "Cat 1",
      user: "Rahul",
      sellingRate: "50",
      biddingRate: "45",
    }];

    this.listData = new MatTableDataSource(array);
    this.listData.paginator = this.paginator;

    
    var refData = this.dialogRef._containerInstance._config.data;
    this.selectedData = refData.selectedData;
    this.selectedProductName = this.selectedData.productName;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
