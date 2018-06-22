import {Personne} from "./Personne";
import {Injectable} from "@angular/core";
import {Competence} from "./Competence";
import {Encadrant} from "./Encadrant";
import {Projet} from "./Projet";

@Injectable()
export class Stagiaire extends Personne {


  etablissement_formation: string ;
  stagiaireCompetences:Competence[];

  projetStagiaire :Projet;
  encadrantStagiaire :Encadrant;
  constructor() {
    super();

  }
}
