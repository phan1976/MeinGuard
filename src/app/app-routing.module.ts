import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [{path:'home',component:HomeComponent, canActivate : [AuthGuardGuard]},
  {path:'about',component:AboutComponent, canActivate: [AuthGuardGuard]},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
