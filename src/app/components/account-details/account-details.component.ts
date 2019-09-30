import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  account: any;
  transactions: any[];
  logoSource: string;

  constructor(
    private route: ActivatedRoute, 
    private accountService: AccountService,
    private transactionService: TransactionService
    ) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');
    this.accountService.getAccountDetails(id).subscribe(account => {
      account.logoSource = this.getRandomLogo(); 
      this.account = account;
    });
    this.transactionService.getAllTransactionsForAccount(id).subscribe(
      data => {
        data.forEach(item => item.logoSource = this.getRandomLogo());
        this.transactions = data;
      }
    );
  }
  
  // Generate random logo for Company
  getRandomLogo() {
    // random int between 1 and 40
    let rand = Math.floor(Math.random() * 40) + 1;
    return "../../../assets/images/logo-"+ rand + ".png";
}

}
