import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {DonneesUser} from "../../interfaces/donnees-user";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 //type any on a pas de type
  //form : any =  {
  form : DonneesUser = {
  email: '',
  password: ''
}

  //constructor(private http:HttpClient) { }
constructor(private authService : AuthService
,private tokenservice : TokenService
) {
}
  ngOnInit(): void {
  }

  //required ==>alors les input ne passe pas vides alors f.formm.valid n'est pas valid
  //methode OnSubmit pour l envoie des donneés de ngOnsubmit
  //f pour form
  //afficher form
  //this.form l'objet qui ecrit dans input
  // dans ng if (si email avais error(vide ou ..) et les donneés submited afficher block div

  onSubmit() : void{
    console.log(this.form)
    //this.http.post('http://localhost:8181/api/v1/auth/authenticate',this.form).subscribe(
    this.authService.login(this.form).subscribe(
      //access token enregistre token
      //(data : any)=>console.log(data.access_token),
      //(error : any ) => console.log(error)
      data  => {
        console.log(data.token)
        this.tokenservice.saveToken(data.token)
      }
      ,
      error  => console.log(error)
    )
  }

}
