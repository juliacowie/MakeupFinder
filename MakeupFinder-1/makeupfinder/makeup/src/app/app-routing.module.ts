import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { SubmitComponent } from './submit/submit.component';


const routes: Routes = [
  {path: '/create-account', component: CreateAccountComponent},
  {path: '/login', component: LoginComponent},
  {path: '/about', component: AboutComponent},
  {path: '/create-account', component: BlushComponent},
  {path: '/bronzer', component: BronzerComponent},
  {path: '/concealer', component: ConcealerComponent},
  {path: '/eyelinder', component: EyelinerComponent},
  {path: '/eyeshadow', component: EyeshadowComponent},
  {path: '/foundation', component: FoundationComponent},
  {path: '/highlighter', component: HighlighterComponent},
  {path: '/lipgloss', component: LipglossComponent},
  {path: '/lipstick', component: LipstickComponent},
  {path: '/home', component: HomeComponent, pathMatch: 'full'},
  {path: '/submit', component: SubmitComponent},

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  

export class AppRoutingModule { }
