import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';
import { HomeComponent } from './components/home/home.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountantListComponent } from './components/accountant-list/accountant-list.component';
import { ManagerListComponent } from './components/manager-list/manager-list.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { AccountantDetailsComponent } from './components/accountant-details/accountant-details.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "accounts", component: AccountListComponent },
  { path: "account-details/:id", component: AccountDetailsComponent },
  { path: "accountants", component: AccountantListComponent },
  { path: "accountant-details", component: AccountantDetailsComponent },
  { path: "managers", component: ManagerListComponent },
  { path: "payments", component: PaymentListComponent },
  { path: "", pathMatch: "full",redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
