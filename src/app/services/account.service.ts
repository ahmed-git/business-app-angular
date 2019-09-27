import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  link = "http://localhost:9000/account";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.link + "/all");
  }

  getAccountDetails(id: number) {
    return this.http.get<any>(this.link + "/" + id);
  }
}
