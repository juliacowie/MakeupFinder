import { Component } from '@angular/core';
import { MakeupService } from '../services/makeup/makeup.service';
import { AppCheckTokenResult } from 'firebase/app-check';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  noUser!: boolean;

  constructor(private MakeupService: MakeupService, private AppComponent: AppComponent){

  }

  getUsername(user: string){
    this.username=user;
    }
  
    getPassword(pass:string){
      this.password= pass;
    }
  



ifSubmit(): boolean {
  if (this.username
    && this.password){
      return true;
    }
  else{
    return false;
  }
}
login(){

  if (!(localStorage.getItem(this.username))){
    this.noUser=true;
  }
  else{
  this.AppComponent.hasAccount= true;
  this.AppComponent.username= this.username;
}

}


}



  






