import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerService } from 'src/app/services/manager.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  loading: boolean;
  selectedRow: any;

  constructor(private managerService: ManagerService, private titleService: Title) {
    this.displayedColumns = ["index", "name", "active", "approval", "lastModified"];
    this.dataSource = new MatTableDataSource();
    this.loading = true;
  }

  ngOnInit() {
    this.titleService.setTitle("Managers");

    this.managerService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.loading = false;
    });
  }

}
