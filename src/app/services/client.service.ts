import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Clients} from "../interfaces/Clients";
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8181/clients";

  constructor(private http: HttpClient) { }


  getClientsList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
  createClient(client : Client): Observable<Client>{
    return this.http.post(`${this.baseURL}`, client);
  }

  login(email: string, password: string): Observable<Client> {
    return this.http.post<Client>(`${this.baseURL}/login?email=${email}&password=${password}`, {});
  }


  register(client: any): Observable<any> {
    return this.http.post(`${this.baseURL}/register`, client);
  }

}
