import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { product } from '../shared/models/product';
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-lipgloss',
  templateUrl: './lipgloss.component.html',
  styleUrls: ['./lipgloss.component.css']
})
export class LipglossComponent {

  under!: string;
  
  clicked!: boolean;


  products: product[]= [];
  productName!: string;
  lipgloss!: product;
  imageUrl!:string;
  lipglossName!: string;
  lipglossPrice!: string;
  lipglossColor!: string;
  constructor(private ProductsService: ProductsService, private AppComponent: AppComponent ){
  

  }

  undertone(under: string){
    this.under= under;
  }

getLipgloss(){
  if(this.AppComponent.hasAccount==true){
    console.log("hasAccount");
    console.log(this.AppComponent.getUsername());
    let userData= localStorage.getItem(this.AppComponent.getUsername());
    console.log(userData);
    if (userData?.includes('Warm')){
      this.under= 'Warm';

    }
    if (userData?.includes('Cool')){
      this.under= 'Cool';
      console.log(this.under);
    }
    if (userData?.includes('Neutral')){
      this.under= 'Neutral';
    }
  }

  this.clicked= true;
  this.products= this.ProductsService.getAll();
  for( let i=0; i<this.products.length; i++){
    let product= this.products[i];
    console.log(product.goesWith);
    console.log(product.name);
    if(product.type=='lipgloss' && product.goesWith.includes(this.under)){
      this.lipgloss= product;
      this.imageUrl= product.imageUrl;
      this.lipglossName= product.name;
      this.lipglossColor= product.color;
      this.lipglossPrice= product.price;

    }
  }
  
}

  hasAccount(): boolean{
    if(this.AppComponent.hasAccount==true){
  

      return true;

    }
    else{
      return false;
    }
  
   
    }
}
