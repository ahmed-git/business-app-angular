import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';
import { HomeComponent } from './components/home/home.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountantListComponent } from './components/accountant-list/accountant-list.component';
import { ManagerListComponent } from './components/manager-list/manager-list.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { AccountantDetailsComponent } from './components/accountant-details/accountant-details.component';
import { ManagerDetailsComponent } from './components/manager-details/manager-details.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "accounts", component: AccountListComponent, data: { title: "Accounts" } },
  { path: "account-details/:id", component: AccountDetailsComponent },
  { path: "accountants", component: AccountantListComponent, data: { title: "Accountants" } },
  { path: "accountant-details/:id", component: AccountantDetailsComponent },
  { path: "managers", component: ManagerListComponent, data: { title: "Managers" } },
  { path: "manager-details/:id", component: ManagerDetailsComponent },
  { path: "payments", component: PaymentListComponent, data: { title: "Payments" } },
  { path: "statistics", component: StatisticsComponent, data: { title: "Statistics" } },
  { path: "", pathMatch: "full",redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
