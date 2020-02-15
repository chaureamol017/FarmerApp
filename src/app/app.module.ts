import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductModule } from './product/product.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { ProductComponent } from './product/product/product.component';
import { AddbidComponent } from './product/bidproduct/addbid/addbid.component';
import { MyprofileComponent } from './dashboard/components/myprofile/myprofile.component';
import { BidlistComponent } from './product/bidproduct/bidlist/bidlist.component';
import { ChangePasswordComponent } from './dashboard/components/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HomeModule,
    DashboardModule,
    ProductModule
  ],
  entryComponents: [
    MyprofileComponent,
    ChangePasswordComponent,
    ProductComponent,
    AddbidComponent,
    BidlistComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
