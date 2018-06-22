import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import {SousTache} from "../Model/SousTache";
import 'rxjs/add/observable/of';
import { Headers } from '@angular/http';


@Injectable()
export class SousTacheServices {

  private apiUrl = 'http://localhost:8080/SousTache';



  constructor(private http: Http) {
  }


  private jwtToken=null;
  loadToken()
  {this.jwtToken=localStorage.getItem('token');}

  findAll(): Observable<SousTache[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl,{headers:headers})
      .map((res:Response) => res.json())

      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  findAllEnCours(): Observable<SousTache[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/EnCours",{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findAllOrdered(): Observable<SousTache[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/Ordered",{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findAllOrdered1(): Observable<SousTache[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/Ordered",{headers:headers})
      .map((res:Response) =>{ return res.json().map( (d) => {


        var x = d.date_debut;
        var sec = x.getSeconds;
        var minutes=x.getMinutes;
        var hours = x.getHours;
        var jour = x.getDay;
        var mois = x.getMonth;
        var annee =x.getFullYear;
        d.date_debut = annee+"-"+mois+"-"+jour;
        console.log(d.date_debut);
      });
            } );

  }

  findAllOrdered2(): Observable<SousTache[]>  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/Ordered",{headers:headers})
      .map(this.changedate)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  changedate(res: Response) {
console.log("test");
    var data = res.json().data || [];
    data.map((d) => {
console.log("ss");
      d.date_debut = new Date(parseInt(d.date_debut.substr(6)));
    });
    return data;
  }

  findById(id: number): Observable<SousTache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.apiUrl+"/"+id,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


  saveSousTache(sousTache: SousTache): Observable<SousTache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.post(this.apiUrl,sousTache,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  deleteById(id:number){
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.delete(this.apiUrl+"/"+id,{headers:headers});
  }

  updateSousTache(id:number ,SousTache: SousTache): Observable<SousTache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/"+id,SousTache,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  upPriorite(id:number ,SousTache: SousTache): Observable<SousTache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/upPriorite/"+id,SousTache,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  downPriorite(id:number ,SousTache: SousTache): Observable<SousTache> {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.put(this.apiUrl+"/downPriorite/"+id+"",SousTache,{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
