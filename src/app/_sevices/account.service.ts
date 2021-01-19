import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'app-users/login', model);
  }
}
