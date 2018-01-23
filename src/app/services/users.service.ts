import { Injectable } from '@angular/core';
import { Response, Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../domain/model';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  _data: Array<User>;

  constructor(private http: Http) { }

  findUsers() {
	return this.http
	        .get('../assets/users.json')
	        .map(this._extractData);
  }

  private _extractData(res: Response) {
    let body =  res.json() || {};
    return body;
  }

}
