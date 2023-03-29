import { Component, OnInit } from '@angular/core';
import {ClientService} from "../services/client.service";
import {Router} from "@angular/router";
import {Product} from "../admin/produit/product";
import {Client} from "../interfaces/Client";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client: Client = new Client();

  constructor(private clientService: ClientService
  ,private router:Router
  ) { }

  ngOnInit(): void {
  }
  saveClient() {
    this.clientService.register(this.client).subscribe(data => {
      console.log(data);
      this.goToDashboard();
    }, error => console.log(error));
  }
  goToDashboard(){
    this.router.navigate(['/client-auth']);
  }


  onSubmit(){
    console.log(this.client);
    this.saveClient();
  }

}
