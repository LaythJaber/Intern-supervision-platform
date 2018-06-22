import { Component, OnInit } from '@angular/core';
import {StagiaireServices} from "../../Services/Stagiaire.service";
import {Stagiaire} from "../../Model/Stagiaire";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-accueil-stagiaire',
  templateUrl: './accueil-stagiaire.component.html',
  styleUrls: ['./accueil-stagiaire.component.scss'],
  providers: []
})
export class AccueilStagiaireComponent implements OnInit {

notification :boolean=false;
idstg:number;
  constructor(activatedRoute : ActivatedRoute) {
    this.idstg=activatedRoute.snapshot.params['id'];



  }

  ngOnInit() {




  }





}
