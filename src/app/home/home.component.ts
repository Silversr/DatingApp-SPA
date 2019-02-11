import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerContentQuery } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public registerMode:boolean = false;
  public values:any[];
  constructor(private http: HttpClient){}
  ngOnInit() {
    this.getValues();
  }
  registerToggle(op1?:any){
    this.registerMode = true;
    console.log('register mode toggled, In registerMode: ' + this.registerMode + ' op1 value = ' + op1);
  }
  public getValues(): void {
    this.http.get<any>('http://localhost:5000/api/values')
             .subscribe(
               response => {this.values = response;},
               error => {console.log(error);}
    );
  }
  public cancelRegisterMode(registerMode:boolean){
    this.registerMode = registerMode;
  }
  public userRegisterOK(username:string){
    this.registerMode = false;
  }


}
