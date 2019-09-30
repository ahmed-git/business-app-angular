import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AccountantService } from 'src/app/services/accountant.service';
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

  constructor(private accountantService: AccountantService) { 
    this.displayedColumns = ["index", "name", "active", "invoices", "companies", "lastModified"];
    this.dataSource = new MatTableDataSource();
    this.loading = true;
    this.showForm = false;
  }

  ngOnInit() {

    this.accountantService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.loading = false;
    });

  }


}
