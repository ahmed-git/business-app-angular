import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  link = "http://localhost:9000/manager";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.link + "/all");
  }
}
