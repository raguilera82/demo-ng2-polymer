import { GithubService } from './proxies/github.service';
import { User } from './model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class UsersService {

  constructor(private proxy:GithubService) { }

  searchUser(username: string): Observable<User>{
    return this.proxy.searchUser(username).map(
      response => response.json()
    )
    .map(
      data => {
        return {"login": data.login, "avatar": data.avatar_url, "admin": data.site_admin}
      }
    )
  }

}
