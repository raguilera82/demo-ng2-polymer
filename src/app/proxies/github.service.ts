import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {

  constructor(private http:Http) { }

  searchUser(username: string): Observable<Response> {
    return this.http.get('https://api.github.com/users/' + username);
  }

}
