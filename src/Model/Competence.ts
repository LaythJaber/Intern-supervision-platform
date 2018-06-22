

import {Injectable} from "@angular/core";
import {Stagiaire} from "./Stagiaire";
import {Projet} from "./Projet";

@Injectable()
export class Competence{


   nomCompetence:string;
   niveau : number ;
   validation : boolean;
   stagiaireCompetence : Stagiaire;
  projetCompetence : Projet;

  constructor( ) {
  }


}
