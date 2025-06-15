import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './introduction.component.css',
    './about.component.css',
    './benefits.component.css',
    './video.component.css',
    './forms.component.css',
    './how_works.component.css',
    './footer.component.css',
  ]
})
export class HomeComponent implements OnInit{
  yearActual: number = 0;

  ngOnInit(): void {
    this.getYearActual();
  }

  getYearActual(){
    this.yearActual = new Date().getFullYear();
  }
}
