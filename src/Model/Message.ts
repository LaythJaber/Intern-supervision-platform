import {Encadrant} from "./Encadrant";
import {Stagiaire} from "./Stagiaire";

export class Message{

  idMessage: number;
  notifiable : boolean;
  contenu:string;
  date_emission: Date;
  encadrantMessage : Encadrant;
  stagiaireMessage : Stagiaire;


  constructor()
  {}
}
