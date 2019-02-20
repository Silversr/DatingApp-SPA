import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};
  
  constructor(public authServices:AuthService,private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    //console.log(this.model);
    this.authServices.login(this.model).subscribe(
      next => {
        //console.log('Logged in successfully, next is ' + JSON.stringify(next)); //onNext means subscribe successful
        this.alertify.success('Logged in successfully');
        //this.alertify.
      },
      error => {
        //console.log('Failed to Login'); //onError means Failed
        this.alertify.error(JSON.stringify(error.status));
      },
      () => {this.router.navigate(['/members']);}
    );
  }

  loggedIn(): boolean{
    //const token:string = localStorage.getItem('token');
    //return !!token; //return false if empty;
    return this.authServices.loggedIn();
  }

  logout(x){
    localStorage.removeItem('token');
    this.model.password = '';
    //console.log('logged out' + x);
    this.alertify.success('log out successfully');
    this.router.navigate(['/home']);
  }
}
