import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {UserComponent} from '../../users/user.component';

@Injectable()
export class DataService {
    
   // private url: string = 'api/dataservice/';
    
    constructor(private http: Http) { }
    
    getCustomersSummary() : Observable<UserComponent[]> {
        return this.http.get('https://testsana.herokuapp.com:'+process.env.PORT+'/users/')
                   .map((resp: Response) => resp.json())
                   .catch(this.handleError);
    }
    
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}