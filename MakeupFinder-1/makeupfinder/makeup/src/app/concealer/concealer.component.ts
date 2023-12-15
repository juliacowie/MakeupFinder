import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { product } from '../shared/models/product';
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-concealer',
  templateUrl: './concealer.component.html',
  styleUrls: ['./concealer.component.css']
})
export class ConcealerComponent {

  
  skin!: string;
  under!: string;
  clicked!: boolean;


  products: product[]= [];
  productName!: string;
  concealer!: product;
  imageUrl!:string;
  concealerName!: string;
  concealerPrice!: string;
  concealerLink!: string;
  concealerColor!: string;
  constructor(private ProductsService: ProductsService, private AppComponent: AppComponent ){
  

  }

  skinColor(skinColor: string){
    this.skin= skinColor;

  }
undertone(under:string){
  this.under= under;
}



getConcealer(){
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
    if(product.type=='concealer' && product.goesWith.includes(this.skin) && product.goesWith.includes(this.under)){
      this.concealer= product;
      this.imageUrl= product.imageUrl;
      this.concealerName= product.name;
      this.concealerColor= product.color;
      this.concealerPrice= product.price;
      this.concealerLink= product.link;

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

