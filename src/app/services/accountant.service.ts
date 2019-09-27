import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  link = "http://localhost:9000/accountant";
  httpOptions = {
    headers: new HttpHeaders(
    { "Content-Type": "application/json" }
  )};

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.link + "/all");
  }

  save(accountant: any) {
    return this.http.post<any>(this.link + "/update", accountant, this.httpOptions)
  }
}
