import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];


  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
