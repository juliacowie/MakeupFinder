import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class MakeAccountService{

  constructor(private db: AngularFirestore) { 

  }


addNewUser(eyeColor:string, eyeLash:string, password:string, skinColor:string, skinConcern: string, undertone: string, 
  username:string) {
  this.db.collection("MakeupFinder").doc("User").set({eyeColor:eyeColor, eyeLash: eyeLash, password: password,
  skinColor: skinColor, skinConcern: skinConcern, undertone: undertone, username: username});

}
getAllUsers() {
  return new Promise<any>((resolve)=> {
    this.db.collection('MakeupFinder').doc('User').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
  })
}




}