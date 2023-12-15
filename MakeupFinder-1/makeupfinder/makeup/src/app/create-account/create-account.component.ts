import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonToggle} from'@angular/material/button-toggle';
import { MakeupService } from '../services/makeup/makeup.service';
import { MakeAccountService } from '../services/makeup/make-account.service';
import { AppComponent } from '../app.component';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  skin!: string;
  under!: string;
  concern!: string;
  username!: string;
  password!: string;
  eye!: string;
  lash!: string;


    

  constructor(private MakeupService:MakeupService, private AppComponent: AppComponent, private afAuth: AngularFireAuth ){
  
  }


  getUsername(user: string){
  this.username=user;
  }

  getPassword(pass:string){
    this.password= pass;
  }


  skinColor(skinColor: string){
    this.skin= skinColor;
  }

  undertone(undertone: string){
    this.under= undertone;
  }

  skinConcern(skinConcern: string){
    this.concern= skinConcern;
  }

  eyeColor(eyeColor: string){
    this.eye= eyeColor;
  }
  
  eyeLash(eyeLash: string){
    this.lash= eyeLash;
  }
  

  ifSubmit(): boolean {
    if (this.skin  && this.eye && this.under && this.username
      && this.password && this.lash){
        this.MakeupService.hasAccount=true;
        return true;

      }
    else{
      return false;
    }
  }

  createAccount(){
     let postData= new Array<string>;
     postData=[
      this.username,
      this.password,
      this.skin,
      this.under,
      this.eye,
      this.lash
     ]

     
    
    localStorage.setItem(this.username, JSON.stringify(postData));
     this.AppComponent.setHasAccount(true);
     this.AppComponent.setUsername(this.username);
    
  }





  }




    
    
  
  

