import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  skin!: string;
  under!: string;
  concern!: string;
  username!: string;
  password!: string;
  eye!: string;
  lash!: string;

}
