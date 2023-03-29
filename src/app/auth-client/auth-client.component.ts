import { Component, OnInit } from '@angular/core';
import {ClientService} from "../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-client',
  templateUrl: './auth-client.component.html',
  styleUrls: ['./auth-client.component.css']
})
export class AuthClientComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.clientService.login(this.email, this.password).subscribe(
      data => {
        localStorage.setItem('client', JSON.stringify(data));
        this.router.navigate(['/dashboard-client']);
      },
      error => console.log(error)
    );
  }

}
