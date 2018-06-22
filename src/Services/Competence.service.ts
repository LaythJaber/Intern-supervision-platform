import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import {Competence} from "../Model/Competence";
import 'rxjs/add/observable/of';
import { Headers } from '@angular/http';

@Injectable()
export class CompetenceServices {

  private apiUrl = 'http://localhost:8080/Competence';

  constructor(private http: Http) {
  }
  private jwtToken=null;
  loadToken()
  {this.jwtToken=localStorage.getItem('token');}


  findAll(): Observable<Competence[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  findAllById(id: number): Observable<Competence[]> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/Stagiaire/"+id,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }





  saveCompetence(Competence: Competence): Observable<Competence> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.post(this.apiUrl,Competence,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  deleteById(id:number){
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.delete(this.apiUrl+"/"+id,{headers:headers});
  }

  updateCompetence(Competence: Competence): Observable<Competence> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl,Competence,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
