import {Injectable} from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Http, Response ,RequestMethod,RequestOptions,URLSearchParams} from "@angular/http";
import { Headers } from '@angular/http';
import {JwtHelper} from 'angular2-jwt';
import {Observable} from "rxjs/Observable";
import {Stagiaire} from "../Model/Stagiaire";



@Injectable()
export class  AutheticationService {
  private  host:string="http://localhost:8080";
  private  roles:Array<any>
  private jwtToken=null;

  constructor(private http:Http,private http2:HttpClient) {

  }
  login (user )
  {
    return this.http2.post(this.host+"/login",user,{observe :'response'});
  }
  saveToken (jwt : string)
  {
    this.jwtToken=jwt;

    localStorage.setItem('token',jwt);
    let jwtHelper =new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles}
  loadToken()
  {this.jwtToken=localStorage.getItem('token');}


  getStagiaires(): Observable<Stagiaire[]>
  {
    if ( this.jwtToken==null) this.loadToken();
    const headers =new Headers ();
    headers.set('authorization',this.jwtToken);
    return this.http.get(this.host+"/stagiaire",{headers:headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }







  logout ()
  { this.jwtToken=null;
    localStorage.removeItem('token');}

  isAdmin():boolean
  {for(let r of  this.roles)
  {
    if  (r.authority =='ADMIN') return true ;
  }
    return false  ;}

  isStagiaire():boolean
  {for(let r of  this.roles)
  {
    if  (r.authority =='USER') return true ;
  }
    return false  ;}

  isResponsable():boolean
  {for(let r of  this.roles)
  {
    if  (r.authority =='SUPERADMIN') return true ;
  }
    return false  ;}

  isEncadrant():boolean
  {for(let r of  this.roles)
  {
    if  (r.authority =='ADMIN') return true ;
  }
    return false  ;}
}

