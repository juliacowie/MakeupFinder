import { Component } from '@angular/core';
import {MakeupService} from '../services/makeup/makeup.service';
import {makeup} from '../shared/models/makeup';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  makeup: makeup[]= [];
  productName!: String;
  constructor(private MakeupService:MakeupService, private router: Router ){
  

  }

  ngOnInit(){
    this.makeup= this.MakeupService.getAll();
  }

  click(makeup: makeup){
    if (makeup.name=='blush'){
    this.router.navigate(['/blush']);
  }
  if (makeup.name=='bronzer'){
    this.router.navigate(['/bronzer']);
  }
  if (makeup.name=='concealer'){
    this.router.navigate(['/concealer']);
  }
  if (makeup.name=='eyeliner'){
    this.router.navigate(['/eyelinder']);
  }
  if (makeup.name=='eyeshadow'){
    this.router.navigate(['/eyeshadow']);
  }
  if (makeup.name=='foundation'){
    this.router.navigate(['/foundation']);
  }
  if (makeup.name=='highlighter'){
    this.router.navigate(['/highlighter']);
  }
  if (makeup.name=='lipgloss'){
    this.router.navigate(['lipgloss']);
  }
  if (makeup.name=='lipstick'){
    this.router.navigate(['lipstick']);
  }
  if (makeup.name== 'mascara'){
    this.router.navigate(['mascara']);
  }
}
}