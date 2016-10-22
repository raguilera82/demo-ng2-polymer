import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User

  constructor(private service:UserService) {}

  ngOnInit() {
  }

  search(username: string): void {
    this.service.searchUser(username)
    .subscribe(
      (data) => this.user = data
    )
  }

  selectUser($event) {
    console.log($event.detail.name)
  }

}
