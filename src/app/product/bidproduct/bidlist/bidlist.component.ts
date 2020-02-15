import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-bidlist',
  templateUrl: './bidlist.component.html',
  styleUrls: ['./bidlist.component.scss']
})
export class BidlistComponent implements OnInit {


  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['productName', 'productCategory', 'user', 'sellingRate', 'biddingRate', 'actions'];
  
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;

  constructor() { }

  ngOnInit() {
    var array = [{
      productName:"ABC",
      productCategory:"Cat 1",
      user: "Rahul",
      sellingRate: "50",
      biddingRate: "45",
    }];
    
    this.listData = new MatTableDataSource(array);
    this.listData.paginator = this.paginator;
  }

}
