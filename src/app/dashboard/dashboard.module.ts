import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDividerModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule, MatSidenavModule } from '@angular/material'

import { ProductModule } from '../product/product.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    MainpageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,

    // FlexLayoutModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,

    ProductModule,
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ]
})
export class DashboardModule { }
