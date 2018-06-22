import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Stagiaire } from '../../Model/Stagiaire';
import { StagiaireServices } from '../../Services/Stagiaire.service';
import { Encadrant } from '../../Model/Encadrant';
import { EncadrantServices } from '../../Services/Encadrant.service';
import { ProjetServices } from '../../Services/Projet.service';
import { Projet } from '../../Model/Projet';
import { Competence } from '../../Model/Competence';
import { CompetenceServices } from '../../Services/Competence.service';


@Component({
  selector: 'app-identite-stagiaire',
  templateUrl: './identite-stagiaire.component.html',
  styleUrls: ['./identite-stagiaire.component.css'],
  providers: [StagiaireServices,Stagiaire,CompetenceServices,Competence,ProjetServices,Projet,Encadrant,EncadrantServices]
})
export class IdentiteStagiaireComponent implements OnInit {





















  ngOnInit() {

    this.getStagiaireById(this.idStg);
    this.getAllCompetenceByIdStagiaire(this.idStg);
  }
  stg: Stagiaire;
  Encadrants;
  Projet;
  Encadrant;
  Projets;
  Stagiaires;
  NomProjet;
  idStg: number;
  stg1 :Stagiaire;

  ajoutmode: boolean = false;
  disabled: boolean = true;
  updatemode: boolean = false;
  newCompetence: Competence;

  Competences;
  saveTable: Competence[] = [];
  test: boolean = false;

  constructor(activatedRoute: ActivatedRoute, private stagiaireService: StagiaireServices, stagiaire: Stagiaire, private competenceService: CompetenceServices, competence: Competence,private EncadrantServices:EncadrantServices,private ProjetServices:ProjetServices,Projet1:Projet,Encadrant1:Encadrant,Stagiaire1:Stagiaire) {
    this.idStg = activatedRoute.snapshot.params['id'];
    this.stg = stagiaire;
    this.stg1 = stagiaire;
    this.newCompetence = competence;
    this.Encadrant=Encadrant1;
    this.Projet=Projet1 ;
    this.newCompetence.validation = false;

  }
  getStagiaireById(id: number) {
    this.stagiaireService.findById(id).subscribe(
      data => {
        this.stg = <Stagiaire>data;


        this.newCompetence.stagiaireCompetence = this.stg;
      },
      err => {
        console.log(err);
      }
    );
  }
  getAllCompetenceByIdStagiaire(id: number) {
    this.competenceService.findAllById(id).subscribe(
      data => {
        this.Competences = data;
      },
      err => {
        console.log(err);
      }
    );}
  State (Comp:Competence)
  {
    if (Comp.validation==true)
      return true ;
    else return false ;



  }
  update(competence:Competence)
  {competence.validation=true ;
    competence.stagiaireCompetence=this.stg;
    this.competenceService.updateCompetence(competence).subscribe(
      data=> {


      }
    )
  }

  save() {
    this.stg.stagiaireCompetences=null;
    console.log (this.stg);
    this.stagiaireService.updateStagiaire(this.idStg,this.stg).subscribe(

      data => {
        this.stg=<Stagiaire> data;

        //console.log(data) ;
      },
      err => {
        //  console.log(err);
      }

    );}


}
