import { Injectable } from '@angular/core';
import { Response, Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User, SearchCondition, SearchFilter } from '../domain/model';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const cudOptions = { headers: new Headers({ 'Content-Type': 'application/json' })};

@Injectable()
export class UsersService {

  private data: Array<User>;
  private usersUrl: string = 'api/users';

  constructor(private http: Http) { }

  findUsers(filter?: SearchFilter): Observable<User[]> {
    let url = `${this.usersUrl}`;
    
    if (filter.value)
      url += `${filter.getSearchQuery()}`;
	  
    return this.http
	    .get(url)
	    .map(this._extractData)
      .catch(this.handleError);
  }

  get(id: string): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .catch(this.handleError);
  }  

  add(user: User): Observable<User> {
    const newUser = Object.assign({}, user);

    return this.http.post(this.usersUrl, newUser, cudOptions)
      .catch(this.handleError);
  }

  delete(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete(url, cudOptions)
      .catch(this.handleError);
  }

  update(user: User): Observable<null> {
    return this.http.put(this.usersUrl, user, cudOptions)
      .catch(this.handleError);
  }  

  private _extractData(res: Response) {
    let body = res.json() || {};
    return body;
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
