import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { product } from '../shared/models/product';
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-highlighter',
  templateUrl: './highlighter.component.html',
  styleUrls: ['./highlighter.component.css']
})
export class HighlighterComponent {

  skin!: string;
  
  clicked!: boolean;


  products: product[]= [];
  productName!: string;
  highlighter!: product;
  imageUrl!:string;
  highlighterName!: string;
  highlighterPrice!: string;
  highlighterLink!: string;
  highlighterColor!: string;
  constructor(private ProductsService: ProductsService, private AppComponent: AppComponent ){
  

  }

  skinColor(skin: string){
    this.skin= skin;
  }




getHighlighter(){
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
    if(product.type=='highlighter' && product.goesWith.includes(this.skin)){
      this.highlighter= product;
      this.imageUrl= product.imageUrl;
      this.highlighterName= product.name;
      this.highlighterColor= product.color;
      this.highlighterPrice= product.price;
      this.highlighterLink= product.link;
      console.log(this.highlighter.imageUrl);

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
