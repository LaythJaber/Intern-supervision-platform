import {Stagiaire} from "./Stagiaire";
import {Encadrant} from "./Encadrant";

export class Reunion{

  idReunion: number;


  approuve:boolean;
  notifiable:boolean;
  objet : string;
  salle : string;

  date: Date;

  stagiaireReunion :Stagiaire;
  encadrantReunion : Encadrant;

  constructor(){}
}
