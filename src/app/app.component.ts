import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title;

  constructor() {}

  ngOnInit() {
    this.title = "Que levante la mano el que piense que habrá efecto demo"
  }

}
