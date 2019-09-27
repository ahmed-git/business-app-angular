import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentLayoutComponent } from './components/parent-layout/parent-layout.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { HomeComponent } from './components/home/home.component';
import { ManagerListComponent } from './components/manager-list/manager-list.component';
import { AccountantListComponent } from './components/accountant-list/accountant-list.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { ManagerDetailsComponent } from './components/manager-details/manager-details.component';
import { AccountantDetailsComponent } from './components/accountant-details/accountant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentLayoutComponent,
    AccountListComponent,
    AccountDetailsComponent,
    HomeComponent,
    ManagerListComponent,
    AccountantListComponent,
    PaymentListComponent,
    PaymentDetailsComponent,
    ManagerDetailsComponent,
    AccountantDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
