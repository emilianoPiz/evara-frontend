import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-back-office',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
  styles: ``,
})
export class AdminComponent {
  // insertData(product: Product) {
  //   const itemToAdd = product;
  //   const itemsCollection = collection(this.firestore, 'products');
  //   addDoc(itemsCollection, itemToAdd)
  //     .then(() => {
  //       console.log('Data inserted successfully');
  //     })
  //     .catch((error) => {
  //       console.error('Error inserting data', error);
  //     });
  // }
}
