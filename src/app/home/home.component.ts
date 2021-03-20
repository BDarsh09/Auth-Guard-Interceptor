import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:Observable<any>
  constructor(private route:Router, private authenticationService:AuthenticationService, private http:HttpClient) { }

  ngOnInit() {
    this.data =  this.http.get('https://my-json-server.typicode.com/typicode/demo/posts')
  }

  logout(){
    this.authenticationService.logout();
    this.route.navigate(['']);
  }

}
