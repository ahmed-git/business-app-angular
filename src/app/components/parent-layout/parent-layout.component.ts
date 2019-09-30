import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { map, filter }  from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-parent-layout',
  templateUrl: './parent-layout.component.html',
  styleUrls: ['./parent-layout.component.css']
})
export class ParentLayoutComponent implements OnInit {

  navTitle: string;
  constructor(
    private titleService: Title, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let pageTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child.snapshot.data['title']) {
            pageTitle = child.snapshot.data['title'];
          }
          return pageTitle;
        })
      ).subscribe((title: string) => {
        this.navTitle = title;
        this.titleService.setTitle(title);
      });
  }
  
  goBack() {
    this.location.back();
  }

}
