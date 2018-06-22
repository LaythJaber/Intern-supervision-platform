import {Personne} from "./Personne";
import { Injectable } from "@angular/core";
@Injectable()
export class Encadrant extends Personne {


  poste: string ;


  constructor() {
    super();

  }
}
