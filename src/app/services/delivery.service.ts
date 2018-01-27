import { Injectable } from '@angular/core';
import { Response, Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Delivery, SearchCondition, SearchFilter } from '../domain/model';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const cudOptions = { headers: new Headers({ 'Content-Type': 'application/json' })};

@Injectable()
export class DeliveryService {

  private data: Array<Delivery>;
  private deliveriesUrl: string = 'api/deliveries';

  constructor(private http: Http) { }

  findDeliveries(filter?: SearchFilter): Observable<Delivery[]> {
    let url = `${this.deliveriesUrl}`;
    
    if (filter.value)
      url += filter.getSearchQuery();
	  
    return this.http
	    .get(url)
	    .map(this._extractData)
      .catch(this.handleError);
  }

  get(id: string): Observable<Delivery> {
    const url = `${this.deliveriesUrl}/${id}`;
    return this.http.get(url)
      .catch(this.handleError);
  }  

  add(delivery: Delivery): Observable<Delivery> {
    const newDelivery = Object.assign({}, delivery);

    return this.http.post(this.deliveriesUrl, newDelivery, cudOptions)
      .catch(this.handleError);
  }

  delete(delivery: Delivery | number): Observable<Delivery> {
    const id = typeof delivery === 'number' ? delivery : delivery.id;
    const url = `${this.deliveriesUrl}/${id}`;

    return this.http.delete(url, cudOptions)
      .catch(this.handleError);
  }

  update(delivery: Delivery): Observable<null> {
    return this.http.put(this.deliveriesUrl, delivery, cudOptions)
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
