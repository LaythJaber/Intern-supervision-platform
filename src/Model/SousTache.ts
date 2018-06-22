import {Tache} from "./Tache";
import {Timestamp} from "rxjs/Rx";

export class SousTache {

  idSousTache: number;

  etat:number;
  description: string;
  nomSousTache: string;
  estimation : number;
  priorite : number;
  tacheSousTache : Tache;

  constructor()
  {}


/*
  constructor(description: string, estimation: number, nom_sous_tache: string, priorite: number,fk_tache : Tache) {
    this.description = description;
    this.estimation = estimation;
    this.nomSousTache = nom_sous_tache;
    this.priorite = priorite;
    this.tacheSousTache=fk_tache;

  }*/

  setIdtache(id:number)
  {this.tacheSousTache.setId(id);}

  setPriorite(priorite:number)
{this.priorite=priorite;}

getPriorite():number
{
  return this.priorite;
}



}
