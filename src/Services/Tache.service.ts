import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import {Tache} from "../Model/Tache";
import 'rxjs/add/observable/of';
import { Headers } from '@angular/http';
import {Projet} from "../Model/Projet";


@Injectable()
export class TacheServices {

  private apiUrl = 'http://localhost:8080/Tache';

  constructor(private http: Http) {
  }

  private jwtToken=null;
  loadToken()
  {this.jwtToken=localStorage.getItem('token');}


  findAll(): Observable<Tache[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  findByProjet1(P:Projet): Observable<Tache[]> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.post(this.apiUrl+"Projet",P,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  findByProjet(): Observable<Tache[]> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"ProjetNull",{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  findAllByProject(id:number): Observable<Tache[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get('http://localhost:8080/TacheByProject/'+id,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  findById(id: number): Observable<Tache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/"+id,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


  saveTache(Tache: Tache): Observable<Tache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.post(this.apiUrl,Tache,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  deleteById(id:number){
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.delete(this.apiUrl+"/"+id,{headers:headers});
  }

  updateTache(id:number ,tache: Tache): Observable<Tache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/"+id+"",tache,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateIteration(id:number ,tache: Tache): Observable<Tache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/incIteration/"+id+"",tache,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  upPriorite(id:number ,tache: Tache): Observable<Tache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/upPriorite/"+id+"",tache,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  downPriorite(id:number ,tache: Tache): Observable<Tache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/downPriorite/"+id+"",tache,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}

