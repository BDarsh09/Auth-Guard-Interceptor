import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard} from './auth-guard.service'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'home', 
    component:HomeComponent, 
    canActivate:[AuthGuard], 
    data:{
      title:'Home'
    }
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:"full"
  },
  {
    path:'login',
    component:LoginComponent,
    data:{
      title:'Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
