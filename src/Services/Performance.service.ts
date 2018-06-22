import { Injectable } from '@angular/core';

import {Http, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import {Performance} from "../Model/Performance";
import 'rxjs/add/observable/of';
import { Headers } from '@angular/http';


@Injectable()
export class PerformanceServices {

  private apiUrl = 'http://localhost:8080/Performance';

  constructor(private http: Http) {
  }


  jwtToken=null;
  loadToken()
  {this.jwtToken=localStorage.getItem('token');}

  findAll(): Observable<Performance[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Performance> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/"+id,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


  savePerformance(Performance: Performance): Observable<Performance> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.post(this.apiUrl,Performance,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  deleteById(id:number){
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.delete(this.apiUrl+"/"+id,{headers:headers});
  }

  updatePerformance(id:number ,Performance: Performance): Observable<Performance> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/"+id+"",Performance,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findAllPerformancesByLogin(login:string):Observable<Performance[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    const options =new RequestOptions({headers :headers ,responseType :3})

    return this.http.post(this.apiUrl+"Stagiaire",login,{headers :headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }



}
