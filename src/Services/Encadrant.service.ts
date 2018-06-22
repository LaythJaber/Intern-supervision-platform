import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';

import {Encadrant} from "./../Model/Encadrant";
import {AutheticationService} from "./Authetication.service";


@Injectable()
export class EncadrantServices {

  private apiUrl = 'http://localhost:8080/Encadrant';

  constructor(private http:Http,private AutheticationService:AutheticationService) {
  }

  jwtToken=null;
  loadToken()
  {this.jwtToken=localStorage.getItem('token');}


  findAll(): Observable<Encadrant[]>{
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl,{headers:headers})
      .map((response: Response)=> <Encadrant[]>response.json())

      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Encadrant> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/"+id,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


  saveEncadrant(encadrant1: Encadrant): Observable<Encadrant> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.post(this.apiUrl,encadrant1,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  deleteById(id:number){
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.delete(this.apiUrl+"/"+id,{headers:headers});
  }

  updateEncadrant(id:number ,encadrant1: Encadrant): Observable<Encadrant> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/"+id+"",encadrant1,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  findByUsername(): Observable<Encadrant> {
    if ( this.jwtToken==null) this.loadToken();
    const headers = new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get('http://localhost:8080/usernameEnc',{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
