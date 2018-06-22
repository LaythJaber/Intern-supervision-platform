import {Tache} from "./Tache";
import {SousTache} from "./SousTache";
import {Injectable} from "@angular/core";

@Injectable()
export class Avancement{

  idAvancement: number;
  iteration : number;
  progression: number ;
  sousTacheAvancement : SousTache;
  tacheAvancement : Tache;


  constructor()
  {}

}
