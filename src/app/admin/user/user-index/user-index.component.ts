import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/User.service";

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  users:any;

  constructor(private service:UserService) {}

  ngOnInit() {
    this.service.getUsers()
      .subscribe(response => {
        this.users = response;
      });
  }
}
