import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { product } from '../shared/models/product';
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-lipstick',
  templateUrl: './lipstick.component.html',
  styleUrls: ['./lipstick.component.css']
})
export class LipstickComponent {

  under!: string;
  
  clicked!: boolean;


  products: product[]= [];
  productName!: string;
  lipstick!: product;
  imageUrl!:string;
  lipstickName!: string;
  lipstickPrice!: string;
  lipstickColor!: string;
  constructor(private ProductsService: ProductsService, private AppComponent: AppComponent ){
  

  }

  undertone(under: string){
    this.under= under;
  }

getLipstick(){
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
    if(product.type=='lipstick' && product.goesWith.includes(this.under)){
      this.lipstick= product;
      this.imageUrl= product.imageUrl;
      this.lipstickName= product.name;
      this.lipstickColor= product.color;
      this.lipstickPrice= product.price;

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



