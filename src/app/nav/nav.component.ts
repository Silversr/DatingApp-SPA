import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};

  constructor(private authServices:AuthService) { }

  ngOnInit() {
  }

  login(){
    //console.log(this.model);
    this.authServices.login(this.model).subscribe(
      next => {
        console.log('Logged in successfully'); //onNext means subscribe successful
      },
      error => {
        console.log('Failed to Login'); //onError means Failed
      }
    );
  }

}
