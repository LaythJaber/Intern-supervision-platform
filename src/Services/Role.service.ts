import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Role } from '../Model/Role';
import 'rxjs/add/observable/of';
import { Headers } from '@angular/http';


@Injectable()
export class RoleServices {

  private apiUrl = 'http://localhost:8080/Role';

  private jwtToken=null;
  loadToken()
  {this.jwtToken=localStorage.getItem('token');}

  constructor(private http: Http) {
  }



  findAll(): Observable<Role[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }




}
