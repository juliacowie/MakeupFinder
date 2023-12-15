import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { product } from '../shared/models/product';
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-mascara',
  templateUrl: './mascara.component.html',
  styleUrls: ['./mascara.component.css']
})
export class MascaraComponent {
  eyelash!: string;
  
  clicked!: boolean;


  products: product[]= [];
  productName!: string;
  mascara!: product;
  imageUrl!:string;
  mascaraName!: string;
  mascaraPrice!: string;
  mascaraColor!: string;
  constructor(private ProductsService: ProductsService, private AppComponent: AppComponent ){
  

  }

  lash(lash: string){
    this.eyelash =lash;
  }

getMascara(){
  if(this.AppComponent.hasAccount==true){
    console.log("hasAccount");
    console.log(this.AppComponent.getUsername());
    let userData= localStorage.getItem(this.AppComponent.getUsername());
    console.log(userData);
    if (userData?.includes('Short lashes')){
      this.eyelash= 'Short lashes';

    }
    if (userData?.includes('Straight lashes')){
      this.eyelash= 'Straight lashes';
     
    }
    if (userData?.includes('Sparase lashes')){
      this.eyelash= 'Sparse lashes';
    }
  }

  this.clicked= true;
  this.products= this.ProductsService.getAll();
  for( let i=0; i<this.products.length; i++){
    let product= this.products[i];
    console.log(product.goesWith);
    console.log(product.name);
    if(product.type=='mascara' && product.goesWith.includes(this.eyelash)){
      this.mascara= product;
      this.imageUrl= product.imageUrl;
      this.mascaraName= product.name;
      this.mascaraColor= product.color;
      this.mascaraPrice= product.price;

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


