import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../services/register.service";
import {Register} from "../../interfaces/register";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: Register = {
    firstname : "",
    lastname : "",
    email :"",
    password : "",
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.registerService.register(this.form).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
