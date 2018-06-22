import {Injectable} from '@angular/core';

import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/observable/of';
import {HttpHeaders} from '@angular/common/http';
import {Headers} from '@angular/http';
import {Projet} from "../Model/Projet";


@Injectable()
export class ProjetServices {

  jwtToken = null;
  private apiUrl = 'http://localhost:8080/Projet';

  constructor(private http: Http) {
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  findAll() {
    if (this.jwtToken == null) this.loadToken();
    const headers = new Headers();
    headers.set('authorization', this.jwtToken);
    return this.http.get(this.apiUrl, {headers: headers})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  findFirstId (projet:string)
{
  if (this.jwtToken == null) this.loadToken();
  const headers = new Headers();
  headers.set('authorization', this.jwtToken);
  return this.http.post(this.apiUrl + "First", projet, {headers: headers})
.map((res: Response) => res.json())

  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));



}

  findAllProjectsNames() {

    if (this.jwtToken == null) this.loadToken();
    const headers = new Headers();
    headers.set('authorization', this.jwtToken);

    return this.http.get(this.apiUrl + "NameDistinct", {headers: headers})
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findAllProjectsByName(nom: string) {
    if (this.jwtToken == null) this.loadToken();
    const headers = new Headers();
    headers.set('authorization', this.jwtToken);
    return this.http.post(this.apiUrl + "Distinct", nom, {headers: headers})
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Projet> {
    if (this.jwtToken == null) this.loadToken();
    const headers = new Headers();
    headers.set('authorization', this.jwtToken);
    return this.http.get(this.apiUrl + "/" + id, {headers: headers})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }


  saveProjet(projet1: Projet) {
    if (this.jwtToken == null) this.loadToken();
    const headers = new Headers();
    headers.set('authorization', this.jwtToken);
    if (this.jwtToken == null) this.loadToken();
    return this.http.post(this.apiUrl, projet1, {headers: headers})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  deleteById(id: number) {
    if (this.jwtToken == null) this.loadToken();
    const headers = new Headers();
    headers.set('authorization', this.jwtToken);
    return this.http.delete(this.apiUrl + "/" + id, {headers: headers});
  }

  updateProjet(id: number, projet1: Projet): Observable<Projet> {
    if (this.jwtToken == null) this.loadToken();
    const headers = new Headers();
    headers.set('authorization', this.jwtToken);
    return this.http.put(this.apiUrl + "/" + id + "", projet1, {headers: headers})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findLastProject () :Observable<Projet> {

    return this.http.get (this.apiUrl+"Last")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
