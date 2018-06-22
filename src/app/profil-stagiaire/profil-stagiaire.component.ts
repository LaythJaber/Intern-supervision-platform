import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Stagiaire} from "../../Model/Stagiaire";
import {StagiaireServices} from "../../Services/Stagiaire.service";
import {Competence} from "../../Model/Competence";
import {CompetenceServices} from "../../Services/Competence.service";

@Component({
  selector: 'app-profil-stagiaire',
  templateUrl: './profil-stagiaire.component.html',
  styleUrls: ['./profil-stagiaire.component.scss'],
  providers: [StagiaireServices,Stagiaire,CompetenceServices,Competence]
})
export class ProfilStagiaireComponent implements OnInit {
  idStg: number;
  stg: Stagiaire;
  ajoutmode: boolean = false;
  disabled: boolean = true;
  updatemode: boolean = false;
  newCompetence: Competence;

  Competences: Competence[];
  saveTable: Competence[] = [];
  test: boolean = false;

  constructor(activatedRoute: ActivatedRoute, private stagiaireService: StagiaireServices, stagiaire: Stagiaire, private competenceService: CompetenceServices, competence: Competence) {
    this.idStg = activatedRoute.snapshot.params['id'];
    this.stg = stagiaire;
    this.newCompetence = competence;
    this.newCompetence.validation = false;

  }

  ngOnInit() {

    this.getStagiaireById(this.idStg);
    this.getAllCompetenceByIdStagiaire(this.idStg);
  }

  getStagiaireById(id: number) {
    this.stagiaireService.findById(id).subscribe(
      data => {
        this.stg = data;
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
    );
  }

  updateMode() {
    this.disabled = false;
    this.updatemode = true;

  }

  updateSkills(newval, comp: Competence) {
    var x = this.Competences.indexOf(comp);
    this.Competences[x].validation = false;
    this.Competences[x].niveau = newval;
  }

  addSkills() {


    this.competenceService.saveCompetence(this.newCompetence).subscribe(
      data => {
        this.newCompetence = data;
      },
      err => {
        console.log(err);
      }
    );

    this.newCompetence.niveau = 0;
    this.newCompetence.nomCompetence = "";
    /*this.fill(this.newCompetence);
    console.log(this.saveTable);*/
  }

  AjoutMode() {
    this.ajoutmode = true;
  }

  fill(c: Competence) {
    this.saveTable.push(c);
    console.log(this.saveTable);
  }


  /*
  testing()
  { this.test=true;}

  }*/
update(comp: Competence)
{

  this.competenceService.updateCompetence(comp).subscribe(
    data => {
      comp = data;
    },
    err => {
      console.log(err);
    }
  );
}
  BulkUpdate() {
    for(var i=0;i<this.Competences.length;i++)
    {
     this.update(this.Competences[i]);
    }
  }
}
