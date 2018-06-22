import { Component, OnInit } from '@angular/core';
import {TacheServices} from "../../Services/Tache.service";
import {ActivatedRoute} from "@angular/router";
import {Tache} from "../../Model/Tache";
import {Avancement} from "../../Model/Avancement";
import {AvancementServices} from "../../Services/Avancement.services";

@Component({
  selector: 'app-fiche-tache',
  templateUrl: './fiche-tache.component.html',
  styleUrls: ['./fiche-tache.component.css'],
  providers:[TacheServices,Tache,AvancementServices,Avancement]
})
export class FicheTacheComponent implements OnInit {
  idstg:number;
  tache : Tache;
  idFKTache :number;
  AvcMax : Avancement;
  constructor(private tacheService : TacheServices,activatedRoute : ActivatedRoute, tache : Tache,private avancementService :AvancementServices,avancement : Avancement) {
    this.tache = tache;
    this.AvcMax = avancement;
    this.idFKTache = activatedRoute.snapshot.params['idTache'];
    this.idstg=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getTacheByid(this.idFKTache);
    this.getMaxTache(this.idFKTache);
  }

  getTacheByid(id: number) {
    this.tacheService.findById(id).subscribe(
      data => {
        this.tache = data;

      },
      err => {
        console.log(err);
      }
    );
  }
  getMaxTache(id:number)
  {
    this.avancementService.findMaxByfkTache(id).subscribe(
      data => {
        this.AvcMax = data;

      },
      err => {
        console.log(err);
      }
    );
  }


  update(id:number , tache : Tache)
  {
    this.tacheService.updateTache(id , tache).subscribe(
      data => {
        this.tache = data;

      },
      err => {
        console.log(err);
      }
    );
  }

}
