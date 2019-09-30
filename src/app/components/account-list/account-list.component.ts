import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AccountService } from 'src/app/services/account.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  loading: boolean;

  @ViewChild(MatSort, {static: true}) sort: MatSort; 
  
  constructor(private accountService: AccountService) { 
    this.dataSource = new MatTableDataSource()  ;
    this.displayedColumns = ['index', 'bank', 'company', 'availibility', 'lastUpdated'];
    this.loading = true;
  }

  ngOnInit() {

    this.accountService.getAll().subscribe(
      data => { 
        this.dataSource.data = data;
        this.loading = false;
      });
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'company': return item.company.name;
        default: return item[property];
      }
    };
    this.dataSource.filterPredicate = (data, filter) => !filter || data.account.toLowerCase().startsWith(filter.toLowerCase())
    || data.company.name.toLowerCase().startsWith(filter.toLowerCase());

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

}
