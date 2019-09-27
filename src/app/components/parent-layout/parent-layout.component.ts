import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-parent-layout',
  templateUrl: './parent-layout.component.html',
  styleUrls: ['./parent-layout.component.css']
})
export class ParentLayoutComponent implements OnInit {

  title: string;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.title = this.titleService.getTitle();
  }

}
