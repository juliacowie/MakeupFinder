import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {provideAnimations} from '@angular/platform-browser/animations';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { BronzerComponent } from './bronzer/bronzer.component';
import { BlushComponent } from './blush/blush.component';
import { ConcealerComponent } from './concealer/concealer.component';
import { EyelinerComponent } from './eyeliner/eyeliner.component';
import { EyeshadowComponent } from './eyeshadow/eyeshadow.component';
import { FoundationComponent } from './foundation/foundation.component';
import { HighlighterComponent } from './highlighter/highlighter.component';
import { LipglossComponent } from './lipgloss/lipgloss.component';
import { LipstickComponent } from './lipstick/lipstick.component';
import {MatButtonToggle} from'@angular/material/button-toggle';
import { SubmitComponent } from './submit/submit.component';
import { MascaraComponent } from './mascara/mascara.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UserComponent } from './user/user.component';

const routes: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blush', component: BlushComponent},
  {path: 'bronzer', component: BronzerComponent},
  {path: 'concealer', component: ConcealerComponent},
  {path: 'eyelinder', component: EyelinerComponent},
  {path: 'eyeshadow', component: EyeshadowComponent},
  {path: 'foundation', component: FoundationComponent},
  {path: 'highlighter', component: HighlighterComponent},
  {path: 'lipgloss', component: LipglossComponent},
  {path: 'lipstick', component: LipstickComponent},
  {path: 'mascara', component: MascaraComponent},
  {path: 'submit', component: SubmitComponent}

]
;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAccountComponent,
    LoginComponent,
    AboutComponent,
    BronzerComponent,
    BlushComponent,
    ConcealerComponent,
    EyelinerComponent,
    EyeshadowComponent,
    FoundationComponent,
    HighlighterComponent,
    LipglossComponent,
    LipstickComponent,
    SubmitComponent,
    MascaraComponent,
    UserComponent,


  

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing:true}),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
