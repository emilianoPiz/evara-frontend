import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase-related-services/firebase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.scss',
})
export class ManageUsersComponent {
  productId: string = '';
  userId: string = '';
  constructor(private firebaseService: FirebaseService) {}

  addUser(user: any) {
    this.firebaseService.insertUser(user).then(() => {
      console.log('User added successfully!');
    });
  }

  updateUser(userId: string, user: any) {
    this.firebaseService.updateUser(userId, user).then(() => {
      console.log('User updated successfully!');
    });
  }

  deleteUser(userId: string) {
    this.firebaseService.deleteUser(userId).then(() => {
      console.log('User deleted successfully!');
    });
  }
}
