import { Injectable } from '@angular/core';
import {makeup} from '../../shared/models/makeup';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  hasAccount=false;
  username!: string;

  constructor() { }
  


  setUsername(user: string){
    this.username=user;
  }
  getUsername(): string{
    return this.username;
  }

  createAccount(){
    this.hasAccount=true;
  }

  getAccount():boolean{
    if(this.hasAccount=true){
      return true;
    }
    else{
      return false;
    }
  }

  getAll(): makeup[]{
    return [
    {
        id:1,
        name: 'blush',
        imageUrl: '/assets/images/cheek.jpeg'
    
      },
      {
        id: 2,      
        name: 'bronzer',
        imageUrl: '/assets/images/bronzer.jpeg'
      },
      {
        id: 3,
        name: 'concealer',
        imageUrl: '/assets/images/concealer.jpeg'
      },
      {
        id: 4,
        name: 'eyeliner',
        imageUrl: '/assets/images/eyeliner.jpeg'
      },
      {
      id:5,
      name: 'eyeshadow',
      imageUrl: '/assets/images/eyeshadow.jpeg'
  
    },
    {
      id: 6,      
      name: 'foundation',
      imageUrl: '/assets/images/foundation.jpeg'
    },
    {
      id: 7,
      name: 'highlighter',
      imageUrl: '/assets/images/highlighter.jpeg'
    },
    {
      id: 8,
      name: 'lipgloss',
      imageUrl: '/assets/images/lipgloss.jpeg'
    },
    {
      id: 9,
      name: 'lipstick',
      imageUrl: '/assets/images/lipstick.jpeg',
    },
    {
      id: 10,
      name: 'mascara',
      imageUrl: '/assets/images/mascara.jpeg'
    }
    ]

    }

    getName(): String[]{
      return[
        "Blush",
        "Bronzer",
        "Concealer",
        "Eyeliner",
        "Eyeshadow",
        "Foundation",
        "Highlighter",
        "Lip gloss",
        "Lip gloss",
        "Mascara"
      ]
    }

  }

