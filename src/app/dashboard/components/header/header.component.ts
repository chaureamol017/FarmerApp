import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MyprofileComponent } from '../myprofile/myprofile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    '../../../common/commonStyle.scss'
  ]
})
export class HeaderComponent implements OnInit {

  appName: any = "Krishi Business";

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private dialog: MatDialog
    ) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    // setTimeout(() => {
    //   window.dispatchEvent(
    //     new Event('resize')
    //   );
    // }, 300);
  }

  
  openBidProduct() {
    var selectedData = {};
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "100%";
    dialogConfig.position = { top: '0', right: '0' },
      dialogConfig.data = {
        selectedData: selectedData
      }

    this.dialog.open(MyprofileComponent, dialogConfig);
  }

}
