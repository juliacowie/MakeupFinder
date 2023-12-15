import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { product } from '../shared/models/product';
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-eyeshdaow',
  templateUrl: './eyeshadow.component.html',
  styleUrls: ['./eyeshadow.component.css']
})
export class EyeshadowComponent {
  clicked!: boolean;

  eye!: string;

  products: product[]= [];
  productName!: string;
  eyeshadow!: product;
  imageUrl!:string;
  eyeshadowName!: string;
  eyeshadowPrice!: string;

  eyeshadowColor!: string;
  constructor(private ProductsService: ProductsService, private AppComponent: AppComponent ){
  

  }



  eyeColor(eyeColor: string){
    this.eye= eyeColor;
  }


geteyeShadow(){
  console.log(this.eye);
  if(this.AppComponent.hasAccount==true){
    console.log("hasAccount");
    console.log(this.AppComponent.getUsername());
    let userData= localStorage.getItem(this.AppComponent.getUsername());
    console.log(userData);
    if (userData?.includes('Blue')){
      this.eye= 'Blue';
 
    }
    if (userData?.includes('Green')){
      this.eye= 'Green';
      
    }
    if (userData?.includes('Brown')){
      this.eye= 'Brown';
    }
    if (userData?.includes('Hazel')){
      this.eye= 'Hazel';
    }
  }
  this.clicked= true;
  this.products= this.ProductsService.getAll();
  for( let i=0; i<this.products.length; i++){
    let product= this.products[i];
    console.log(product);
    if(product.type=='eyeshadow' && product.goesWith.includes(this.eye) ){
      console.log(product);
      this.eyeshadow= product;
      this.imageUrl= product.imageUrl;
      this.eyeshadowName= product.name;
      this.eyeshadowColor= product.color;
      this.eyeshadowPrice= product.price;

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