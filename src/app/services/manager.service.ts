import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  link = "http://localhost:9000/manager";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "Application/json"
    })
  }

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.link + "/all");
  }

  get(id: number) {
    return this.http.get<any>(this.link + "/" + id);
  }

  save(manager: any) {
    return this.http.post<any>(this.link + "/update", manager, this.httpOptions);
  }
}
