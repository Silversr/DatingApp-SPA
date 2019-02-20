import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model:any = {};
  @Input() public innerBool:boolean;
  @Input() public valuesFromHome:any[];
  @Output() public cancelRequest = new EventEmitter<boolean>();
  @Output() public registerOKRequest = new EventEmitter<string>();
  constructor(private authService: AuthService,private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    console.log(this.model);
    this.authService.register(this.model).subscribe(
      next => {
        //console.log('Register successfully'); //onNext means subscribe successful, what to do next
        
        this.registerOK(this.model);
        this.login(this.model);
      },
      error => {
        //console.log('Failed to Register: ' + JSON.stringify(error)); //onError means Failed, what to do with an error
        this.alertify.error(JSON.stringify(error.status) + JSON.stringify(error.error));
      }
    );
  }
  cancel(){
    console.log('cancelled');
    this.cancelRequest.emit(false);
  }
  public registerOK(model:any){
    this.alertify.success("Register sucessfully");
    this.registerOKRequest.emit(model.username);
  }
  private login(model:any){
    this.authService.login(this.model).subscribe(
      next => {
        console.log("Auto Sign in OK after sucessful register, next is " + JSON.stringify(next));

    },
      error => {console.log("Failed to auto sign in after successful register");}

    );
  }

}
