import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  user: User;

  constructor(private service:UsersService) {}

  ngOnInit() {
  }

  searchUser(username: string): void {
    this.service.searchUser(username).subscribe(
      info => this.user = info,
      error => console.log(error)
    )
  }

  selectUser($event){
    console.log($event.detail);
  }
  
}
