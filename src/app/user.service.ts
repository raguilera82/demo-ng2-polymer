import { User } from './model/user';
import { Injectable } from '@angular/core';
import { GithubService } from './proxies/github.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private proxy:GithubService) { }

  searchUser(username: string): Observable<User> {
    return this.proxy.searchUser(username)
    .map(response => response.json())
    .map(data => {return {"login": data.login, 
    "name": data.name, "avatar": data.avatar_url, "admin": data.site_admin }})
  }

}
