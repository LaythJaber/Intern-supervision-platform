import {Injectable} from "@angular/core";
import {Projet} from "./Projet";


@Injectable()
export class Tache {

  idTache: number;


  description: string;
  estimation: number;
  priorite: number;
  iterationActuelle : number;
  nomTache: string;
  projetTache : Projet;
  etat:number;


  constructor()
  {}



 public  setId(id:number)
  {this.idTache=id;}
}
