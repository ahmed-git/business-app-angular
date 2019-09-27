import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AccountantService } from 'src/app/services/accountant.service';import { Title } from '@angular/platform-browser';
;

@Component({
  selector: 'app-accountant-list',
  templateUrl: './accountant-list.component.html',
  styleUrls: ['./accountant-list.component.css']
})
export class AccountantListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  loading: boolean;
  showForm: boolean;
  selectedRow: any;

  constructor(private accountantService: AccountantService, private titleService: Title) { 
    this.displayedColumns = ["index", "name", "active", "invoices", "companies", "lastModified"];
    this.dataSource = new MatTableDataSource();
    this.loading = true;
    this.showForm = false;
  }

  ngOnInit() {
    this.titleService.setTitle("Accountants");

    this.accountantService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.loading = false;
    });

  }


}
