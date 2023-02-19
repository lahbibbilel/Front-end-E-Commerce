import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  constructor(private http : HttpClient) {


  }

  ngOnInit(): void {
    this.http.get('http://localhost:8181/api/v1/demo-controller/ok').subscribe(
      data=>console.log(data),
      error=>console.log(error)
  )}

}
