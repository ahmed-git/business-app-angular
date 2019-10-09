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

  getAccountant(id: number) {
    return this.http.get<any>(this.link + "/" + id);
  }

  save(accountant: any) {
    return this.http.post<any>(this.link + "/" + accountant.id, accountant, this.httpOptions)
  }
}
