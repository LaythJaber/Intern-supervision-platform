import { Component, OnInit } from '@angular/core';
import {PropositionServices} from "../../Services/Proposition.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-proposition-liste-stagiaire',
  templateUrl: './proposition-liste-stagiaire.component.html',
  styleUrls: ['./proposition-liste-stagiaire.component.scss'],
  providers:[PropositionServices]
})
export class PropositionListeStagiaireComponent implements OnInit {
Propositions = [];
idstg;
  constructor(private propositionservice:PropositionServices, activatedRoute : ActivatedRoute) {
  this.idstg=activatedRoute.snapshot.params['id']; }
  ngOnInit() {
    this.getAllPropositions(this.idstg);
  }

  getAllPropositions(id : number)
  {
    this.propositionservice.findByIdStagiaire(id).subscribe(
      data => {
        this.Propositions = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
