import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  link = "http://localhost:9000/transaction"
  constructor(private http: HttpClient) { }

  getAllTransactionsForAccount(accountId: number) {
    return this.http.get<any>(this.link + "/account/" + accountId)
  }

  getAll(status: string) {
    return this.http.get<any>(this.link + "/all/" + status);
  }
}
