import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string;
  password:string;
  data:Observable<any>
  title: 'auth-guard-demo';

  constructor(private _auth: AuthenticationService, private _router:Router){
    if(this._auth.loggedIn){
      this._router.navigate(['home']);
    }
  }

  login():void{
    if(this.username != '' && this.password != ''){
      if(this._auth.login(this.username, this.password)){
        this._router.navigate(['home']);  
      }
      else{
        alert('Wrong Username or Password');
      }
    }
  }

}
