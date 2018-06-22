import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import {Departement} from "../Model/Departement";
import 'rxjs/add/observable/of';
import { Headers } from '@angular/http';

@Injectable()
export class DepartementServices {

  private apiUrl = 'http://localhost:8080/Departement';

  private jwtToken=null;
  loadToken()
  {this.jwtToken=localStorage.getItem('token');}

  constructor(private http: Http) {
  }



  findAll(): Observable<Departement[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Departement> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/"+id,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


  saveDepartement(Departement: Departement): Observable<Departement> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.post(this.apiUrl,Departement,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  deleteById(id:number){
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.delete(this.apiUrl+"/"+id,{headers:headers});
  }

  updateDepartement(id:number ,Departement: Departement): Observable<Departement> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/"+id+"",Departement,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
