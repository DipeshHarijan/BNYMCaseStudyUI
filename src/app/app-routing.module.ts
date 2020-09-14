import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { InvestComponent } from './invest/invest.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [RouteGuardService] },
  { path: "dashboard/account", component: BankAccountComponent, canActivate: [RouteGuardService] },
  { path: "dashboard/transactions", component: TransactionsComponent, canActivate: [RouteGuardService] },
  { path: "dashboard/create-account", component: AccountFormComponent, canActivate: [RouteGuardService] },
  { path: "dashboard/invest", component: InvestComponent, canActivate: [RouteGuardService] },
  { path: "logout", component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
