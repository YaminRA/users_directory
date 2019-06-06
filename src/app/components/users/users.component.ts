import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(UserFormComponent);
  }

  ngOnInit() {
  }

}
