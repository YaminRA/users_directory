import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private firestore: AngularFirestore) {
    this.users = this.firestore.collection('users').valueChanges();
  }

  getAllUsers() {
    return this.users;
  }

}
