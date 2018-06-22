import {Injectable} from "@angular/core";
import { Competence } from "./Competence";
import {Encadrant} from "./Encadrant";

@Injectable()
export class Projet{

  idProjet: number;
estimation : number;
  nomProjet: string;
  dateDebut: string ;
  dateFin: string;
  projetCompetences:Competence [];
  encadrantProjet :Encadrant ;


  constructor()
  {}
}
