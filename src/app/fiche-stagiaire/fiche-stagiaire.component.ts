import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Stagiaire } from '../../Model/Stagiaire';
/*
import { StagiaireServices } from '../../Services/Stagiaire.service';
import { ProjetServices } from '../../Services/Projet.service';
import { Projet } from '../../Model/Projet';
import { Encadrant } from '../../Model/Encadrant';
import { EncadrantServices } from '../../Services/Encadrant.service';
import { Competence } from '../../Model/Competence';
import { CompetenceServices } from '../../Services/Competence.service';
*/
@Component({
  selector: 'app-fiche-stagiaire',
  templateUrl: './fiche-stagiaire.component.html',
  styleUrls: ['./fiche-stagiaire.component.css']
})
export class FicheStagiaireComponent implements OnInit {

  idStg :number ;
  constructor(activatedRoute: ActivatedRoute) {
    this.idStg = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
