import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  data = { message: 'Hello, Firebase!' };
  constructor (private firebase: FirebaseService){}
  insertData() {
    this.firebase.insertData(this.data).then(() => {
      console.log('Data inserted successfully');
    }).catch(error => {
      console.error('Error inserting data', error);
    });
  }
}
