import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { BlushComponent } from './blush/blush.component';
import { BronzerComponent } from './bronzer/bronzer.component';
import { ConcealerComponent } from './concealer/concealer.component';
import { EyelinerComponent } from './eyeliner/eyeliner.component';
import { EyeshadowComponent } from './eyeshadow/eyeshadow.component';
import { FoundationComponent } from './foundation/foundation.component';
import { HighlighterComponent } from './highlighter/highlighter.component';
import { LipglossComponent } from './lipgloss/lipgloss.component';
import { LipstickComponent } from './lipstick/lipstick.component';
import { MakeupService } from './services/makeup/makeup.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Makeup Finder';
  username!: string;
  //url='https://console.firebase.google.com/u/0/project/makeupfinder-8498e/firestore/data/~2FUser~2Fuser'
  url= '"https://makeupfinder-8498e-default-rtdb.firebaseio.com';
 // url= 'https://console.firebase.google.com/u/0/project/makeupfinder-8498e/database/makeupfinder-8498e-default-rtdb/data/~2F';
  //url= 'https://console.firebase.google.com/project/makeupfinder-8498e/firestore/data/~2FUser';
  //url= 'https://console.firebase.google.com/project/makeupfinder-8498e/overview';
  header = new HttpHeaders({'Access-Control-Allow-Origing': 'https://makeupfinder-8498e-default-rtdb.firebaseio.com/'});
  body!: any;
  hasAccount!: boolean;



constructor(private MakeupService:MakeupService, private http: HttpClient ){

}
  setHasAccount(boolean: boolean){
    this.hasAccount= boolean;
}

setUsername(user: string){
  this.username= user;
}


getUsername(): string{
  return this.username;
}
}


