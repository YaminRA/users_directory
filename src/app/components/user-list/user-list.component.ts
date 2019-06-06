import { GetUsersService } from './../../services/get-users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  public columnDefs;
  public sortingOrders;

  userList: User[];

  constructor(public getUsers: GetUsersService) {
    this.columnDefs = [{
      headerName: 'First name',
      field: 'firstName',
      width: 100,
      sortable: true,
      filter: true,
      sortingOrder: ['asc', 'desc']
    },
    {
      headerName: 'Last name',
      field: 'lastName',
      width: 100,
      sortable: true,
      filter: true,
      sortingOrder: ['asc', 'desc']
    },
    {
      headerName: 'Address',
      field: 'address',
      width: 350,
      sortable: true,
      filter: true,
      sortingOrder: ['asc', 'desc']
    },
    {
      headerName: 'Email',
      field: 'email',
      width: 250,
      sortable: true,
      filter: true,
      sortingOrder: ['asc', 'desc']
    },
    {
      headerName: 'Phone',
      field: 'phone',
      width: 150,
      sortable: true,
      filter: true,
      sortingOrder: ['asc', 'desc']
    }
    ];
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getUsers.getAllUsers().subscribe(users => {
      params.api.setRowData(users);
    });
  }

  ngOnInit() {

  }
}
