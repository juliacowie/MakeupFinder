import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { product } from '../shared/models/product';
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent {
 
  
  skin!: string;
  under!: string;
  clicked!: boolean;


  products: product[]= [];
  productName!: string;
  foundation!: product;
  imageUrl!:string;
  foundationName!: string;
  foundationPrice!: string;
  foundationLink!: string;
  foundationColor!: string;
  constructor(private ProductsService: ProductsService, private AppComponent: AppComponent ){
  

  }

  skinColor(skinColor: string){
    this.skin= skinColor;

  }
undertone(under:string){
  this.under= under;
}



getFoundation(){
  if(this.AppComponent.hasAccount==true){
    console.log("hasAccount");
    console.log(this.AppComponent.getUsername());
    let userData= localStorage.getItem(this.AppComponent.getUsername());
    console.log(userData);
    if (userData?.includes('Fair') && userData?.includes('Warm')){
      this.skin= 'Fair';
      this.under= 'Warm'
      console.log(this.skin);
    }
    if (userData?.includes('Fair') && userData?.includes('Cool')){
      this.skin= 'Fair';
      this.under= 'Cool'
      console.log(this.skin);
    }
    if (userData?.includes('Fair') && userData?.includes('Neutral')){
      this.skin= 'Fair';
      this.under= 'Neutral'
      console.log(this.skin);
    }
    if (userData?.includes('Medium') && userData?.includes('Warm')){
      this.skin= 'Medium';
      this.under= 'Warm'
      console.log(this.skin);
    }
    if (userData?.includes('Medium') && userData?.includes('Cool')){
      this.skin= 'Medium',
      this.under= 'Cool'
      console.log(this.skin);
    }
    if (userData?.includes('Medium') && userData?.includes('Neutral')){
      this.skin= 'Medium';
      this.under= 'Neutral'
      console.log(this.skin);
    }
    if (userData?.includes('Dark') && userData?.includes('Warm')){
      this.skin= 'Dark';
      this.under= 'Warm'
      console.log(this.skin);
    }
    if (userData?.includes('Dark') && userData?.includes('Cool')){
      this.skin= 'Dark',
      this.under= 'Cool'
      console.log(this.skin);
    }
    if (userData?.includes('Dark') && userData?.includes('Neutral')){
      this.skin= 'Dark';
      this.under= 'Neutral'
      console.log(this.skin);
    }




    }


  console.log(this.skin);
  this.clicked= true;
  this.products= this.ProductsService.getAll();
  for( let i=0; i<this.products.length; i++){
    let product= this.products[i];
    console.log(product.goesWith);
    console.log(product.name);
    if(product.type=='foundation' && product.goesWith.includes(this.skin) && product.goesWith.includes(this.under)){
      this.foundation= product;
      this.imageUrl= product.imageUrl;
      this.foundationName= product.name;
      this.foundationColor= product.color;
      this.foundationPrice= product.price;
      this.foundationLink= product.link;

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


