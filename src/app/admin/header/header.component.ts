import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
  }

  //on fait appele a DeleteToken de service token
logout() : void
{
  this.tokenService.DeleteTokenForlogout()
}
}
