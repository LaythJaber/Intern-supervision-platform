import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import {Responsable} from "../Model/Responsable";
import 'rxjs/add/observable/of';


@Injectable()
export class ResponsableServices {

  private apiUrl = 'http://localhost:8080/Responsable';

  private jwtToken=null;
  loadToken()
  {this.jwtToken=localStorage.getItem('token');}

  constructor(private http: Http) {
  }



  findAll(): Observable<Responsable[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Responsable> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/"+id,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


  saveResponsable(Responsable: Responsable): Observable<Responsable> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.post(this.apiUrl,Responsable,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  deleteById(id:number){
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.delete(this.apiUrl+"/"+id,{headers:headers});
  }

  updateResponsable(id:number ,Responsable: Responsable): Observable<Responsable> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/"+id+"",Responsable,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
