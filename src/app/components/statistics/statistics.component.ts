import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  dataPaymentsChart = [];
  dataAccountsChart = [];
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  loadingPaymentsChart: boolean;
  loadingAccountsChart: boolean;

  constructor(
    private transactionService: TransactionService,
    private accountService: AccountService
    ) { }

  ngOnInit() {
    // Loading Data for First Chart 
    this.loadingPaymentsChart = true;
    this.loadingAccountsChart = true;
    let status = ["Pending", "Submitted", "Confirmed", "Failed"];
    for(let index in status) {
      this.transactionService.getAll(status[index]).subscribe(
        transactionData => {this.dataPaymentsChart.push(
          {
            "name": status[index],
            "value": transactionData.reduce((total,transaction)=> total + transaction.amount, 0)
          }
        );
        this.loadingPaymentsChart = this.dataPaymentsChart.length != 4;
      });
    }

    // Loading Data for Second Chart
    this.accountService.getAll().subscribe(
      accounts => {
        for(let i=0; i<10; i++) {
          this.dataAccountsChart.push(
            {
              "name": accounts[i].company.name,
              "value": accounts[i].availibility
            }
          );
        }
        this.loadingAccountsChart = false;
      });
      
        
    
  }

}
