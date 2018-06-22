import { Component, OnInit } from '@angular/core';
import {SousTache} from "../../Model/SousTache";
import {ActivatedRoute} from "@angular/router";
import {SousTacheServices} from "../../Services/SousTache.service";
import {AvancementServices} from "../../Services/Avancement.services";
import {Avancement} from "../../Model/Avancement";

@Component({
  selector: 'app-fiche-soustache',
  templateUrl: './fiche-soustache.component.html',
  styleUrls: ['./fiche-soustache.component.css'],
  providers:[SousTacheServices,SousTache,AvancementServices,Avancement]
})
export class FicheSoustacheComponent implements OnInit {
sousTache : SousTache;
idFKTache :number;
AvcMax : Avancement;
  constructor(private sousTacheService : SousTacheServices,activatedRoute : ActivatedRoute, sousTache : SousTache,private avancementService :AvancementServices,avancement : Avancement) {
this.sousTache = sousTache;
this.AvcMax = avancement;
    this.idFKTache = activatedRoute.snapshot.params['idSousTache'];

  }

  ngOnInit() {
    this.getSousTacheByid(this.idFKTache);
    this.getMaxSousTache(this.idFKTache);
  }

  getSousTacheByid(id: number) {
    this.sousTacheService.findById(id).subscribe(
      data => {
        this.sousTache = data;

      },
      err => {
        console.log(err);
      }
    );
  }
getMaxSousTache(id:number)
{
  this.avancementService.findMaxByfkSousTache(id).subscribe(
    data => {
  this.AvcMax = data;

},
err => {
  console.log(err);
}
);
}

update(id:number , sousTache : SousTache)
{
  this.sousTacheService.updateSousTache(id , sousTache).subscribe(
    data => {
      this.sousTache = data;

    },
    err => {
      console.log(err);
    }
  );
}



}
