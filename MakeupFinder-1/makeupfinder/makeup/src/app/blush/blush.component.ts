import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { product } from '../shared/models/product';
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-blush',
  templateUrl: './blush.component.html',
  styleUrls: ['./blush.component.css']
})
export class BlushComponent {

  skin!: string;
  
  clicked!: boolean;


  products: product[]= [];
  productName!: string;
  blush!: product;
  imageUrl!:string;
  blushName!: string;
  blushPrice!: string;
  blushLink!: string;
  blushColor!: string;
  constructor(private ProductsService: ProductsService, private AppComponent: AppComponent ){
  

  }

  skinColor(skinColor: string){
    this.skin= skinColor;
  }




getBlush(){
  if(this.AppComponent.hasAccount==true){
    console.log("hasAccount");
    console.log(this.AppComponent.getUsername());
    let userData= localStorage.getItem(this.AppComponent.getUsername());
    console.log(userData);
    if (userData?.includes('Fair')){
      this.skin= 'Fair';
      console.log(this.skin);
    }
    if (userData?.includes('Fair')){
      this.skin= 'Fair';
      console.log(this.skin);
    }
    if (userData?.includes('Medium')){
      this.skin= 'Medium';
    }


  }
  console.log(this.skin);
  this.clicked= true;
  this.products= this.ProductsService.getAll();
  for( let i=0; i<this.products.length; i++){
    let product= this.products[i];
    console.log(product.goesWith);
    console.log(product.name);
    if(product.type=='blush' && product.goesWith.includes(this.skin)){
      this.blush= product;
      this.imageUrl= product.imageUrl;
      this.blushName= product.name;
      this.blushColor= product.color;
      this.blushPrice= product.price;
      this.blushLink= product.link;
      console.log(this.blush.imageUrl);

    }
  }
  
  }

  hasAccount(): boolean{
    if(this.AppComponent.hasAccount==true){
      let userData= localStorage.getItem(this.AppComponent.username);
      if (userData?.includes('Fair')){
        this.skin= 'Fair';
      }
      if (userData?.includes('Medium')){
        this.skin= 'Medium';
      }
      {
        if (userData?.includes('Dark')){
          this.skin= 'Dark';
        } 
      }
      return true;

    }
    else{
      return false;
    }
  
   
    }
  }



  

  






 



  function hasAccount() {
    throw new Error('Function not implemented.');
  }

