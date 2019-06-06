import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  get firstNameControl() {
    return this.userForm.get('firstName');
  }

  get lastNameControl() {
    return this.userForm.get('lastName');
  }

  get addressControl() {
    return this.userForm.get('address');
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get phoneControl() {
    return this.userForm.get('phone');
  }

  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) {}

  userForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]+$')]],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]
    ]
  });

  onSubmit() {
    console.log(this.userForm.value);
    this.firestore.collection('users').add(this.userForm.value);
    this.userForm.reset();
  }

  ngOnInit() { }
}
