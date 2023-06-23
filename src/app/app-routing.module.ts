import { NgModule } from '@angular/core';
import { PrivateGuard } from './guard/check.guard';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PrivateClassComponent } from './component/private-class/private-class.component';
import { AboutComponent } from './component/about/about.component';
import { ExpenseComponent } from './component/expense/expense.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'privateclass', component: PrivateClassComponent, canActivate: [PrivateGuard] },
  { path: 'expense', component: ExpenseComponent, canActivate: [PrivateGuard] },
  { path: 'about', component:  AboutComponent, canActivate: [PrivateGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
