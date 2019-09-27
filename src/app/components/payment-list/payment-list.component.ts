import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from 'src/app/services/transaction.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  loading: boolean;
  selectedRow: any;
  
  constructor(private transactionService: TransactionService, private titleService: Title) { 
    this.displayedColumns = ["status", "sender", "receiver", "amount", "date"];
    this.dataSource = new MatTableDataSource();
    this.loading = true;
  }

  ngOnInit() {
    this.titleService.setTitle("Payments");
    this.applyFilter("Pending");
  }

  applyFilter(status: string) {
    this.loading = true;
    this.transactionService.getAll(status).subscribe(data => 
      { this.dataSource.data = data;
        this.loading = false;
      });
  }

}
