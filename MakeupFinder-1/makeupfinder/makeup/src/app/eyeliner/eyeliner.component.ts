import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { product } from '../shared/models/product';
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-eyeliner',
  templateUrl: './eyeliner.component.html',
  styleUrls: ['./eyeliner.component.css']
})
export class EyelinerComponent {
  clicked!: boolean;


  products: product[]= [];
  productName!: string;
  eyeliner!: product;
  imageUrl!:string;
  eyelinerName!: string;
  eyelinerPrice!: string;
  eyelinerLink!: string;
  eyelinerColor!: string;
  constructor(private ProductsService: ProductsService, private AppComponent: AppComponent ){
  

  }





getEyeliner(){
 
  this.clicked= true;
  this.products= this.ProductsService.getAll();
  for( let i=0; i<this.products.length; i++){
    let product= this.products[i];
    if(product.type=='eyeliner' && product.goesWith.includes('eyeliner') ){
      this.eyeliner= product;
      this.imageUrl= product.imageUrl;
      this.eyelinerName= product.name;
      this.eyelinerColor= product.color;
      this.eyelinerPrice= product.price;
      this.eyelinerLink= product.link;
      console.log(this.imageUrl);

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

