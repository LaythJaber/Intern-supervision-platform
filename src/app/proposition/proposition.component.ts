import { Component, OnInit } from '@angular/core';
import {Proposition} from "../../Model/Proposition";
import {PropositionServices} from "../../Services/Proposition.service";
import {ActivatedRoute} from "@angular/router";
import {Stagiaire} from "../../Model/Stagiaire";

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.scss'],
  providers: [PropositionServices,Proposition,Stagiaire]
})
export class PropositionComponent implements OnInit {
  Propositions: Proposition[];
  proposition : Proposition;
  idStg :number;
  stg : Stagiaire;
  constructor(activatedRoute : ActivatedRoute, private propositionService: PropositionServices,prop:Proposition,stagiaire :Stagiaire) {
    this.idStg= activatedRoute.snapshot.params['id'];
    this.stg=stagiaire;
    this.stg.idPersonne=this.idStg;

    this.proposition=prop;
    this.proposition.stagiaireProposition=this.stg;

  }

  ngOnInit() {
    this.getAllPropositions()
  }




getAllPropositions()
{

  this.propositionService.findAll().subscribe(
    data => {
      this.Propositions = data;
    },
    err => {
      console.log(err);
    }
  );
}


  save() {
    /*this.proposition.stagiaireProposition=this.stg;*/
    this.propositionService.saveProposition(this.proposition).subscribe(
      data => {
        this.proposition = data;
        this.proposition.contenu = "";
      },
      err => {
        console.log(err);
      }

    );
  }

}
