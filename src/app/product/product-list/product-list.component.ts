import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {
  MatDialog, MatDialogConfig,
  MatTableDataSource, MatSort, MatPaginator
} from '@angular/material';
import { ProductComponent } from '../product/product.component';
import { AddbidComponent } from '../bidproduct/addbid/addbid.component';
import { UserDetails } from 'src/app/classes/user-details';
import { BidlistComponent } from '../bidproduct/bidlist/bidlist.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [
    './product-list.component.scss',
    '../../common/commonStyle.scss'
  ]
})
export class ProductListComponent implements OnInit {
  @Input('loggedInUser') loggedInUser: UserDetails = new UserDetails();
  userRole: any = "Buyer";
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['productName', 'productCategory', 'grade', 'description', 'user', 'city', 'dateTobeAvailable', 'sellingRate', 'biddingRate', 'actions'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;

  constructor(
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.userRole = this.loggedInUser.role;

    var array = [{
      productName: "ABC",
      categoryid: "C1",
      category: "Cat 1",
      gradeid: "G1",
      grade: "G 1",
      description: "Desc 1",
      user: "Rahul",
      city: "Pune",
      dateTobeAvailable: "15 Feb, 2020",
      sellingRate: "50",
      biddingRate: "45",
    }];

    this.listData = new MatTableDataSource(array);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    this.listData.filterPredicate = (data, filter) => {
      return this.displayedColumns.some(ele => {
        return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
      });
    };
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  addProduct(selectedData) {
    this.openProductDialog(null, false);
  }

  editProduct(row) {

    this.openProductDialog(row, true);
  }

  openProductDialog(selectedData, isEdit) {

    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "100%";
    dialogConfig.position = { top: '0', right: '0' },
      dialogConfig.data = {
        selectedData: selectedData,
        isEdit: isEdit
      }

    this.dialog.open(ProductComponent, dialogConfig);
  }

  deleteProduct(row) {
    if (confirm("Are you sure you want ot delete  record?")) {

    }
  }

  viewBidProduct(selectedData, isEdit) {
    this.openDialogWithConfig(BidlistComponent, selectedData, isEdit, true);
  }
  addBidProduct(selectedData) {
    this.openDialogWithConfig(AddbidComponent, selectedData, false, false);
  }

  editBidProduct(selectedData) {
    this.openDialogWithConfig(AddbidComponent, selectedData, true, false);
  }

  openDialogWithConfig(dialogComponent, selectedData, isEdit, viewAtRight) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    if (viewAtRight) {
      dialogConfig.width = "60%";
      dialogConfig.height = "100%";
      dialogConfig.position = { top: '0', right: '0' };
    } else {
      dialogConfig.width = "40%";
    }
    dialogConfig.data = {
      selectedData: selectedData,
      isEdit: isEdit
    }
    this.dialog.open(dialogComponent, dialogConfig);
  }
}
