import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogConfig } from "@angular/material"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appName: any = "Krishi Business";

  constructor(
    // private dilog: MatDialog
  ) { }

  ngOnInit() {
  }

}
