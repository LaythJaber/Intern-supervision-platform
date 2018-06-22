

import {Injectable} from "@angular/core";
import {Stagiaire} from "./Stagiaire";

@Injectable()
export class Proposition{

  idProposition: number;
  contenu: string;
  date: Date;
  validation : boolean;
  rectification : string;
  notifiable:boolean;
  stagiaireProposition : Stagiaire;


constructor()
{}

}
