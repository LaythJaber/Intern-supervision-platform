import { Component, OnInit } from '@angular/core';
import {SousTacheServices} from "../../Services/SousTache.service";
import {SousTache} from "../../Model/SousTache";
import {ActivatedRoute} from "@angular/router";
import {Tache} from "../../Model/Tache";

@Component({
  selector: 'app-new-sous-tache',
  templateUrl: './new-sous-tache.component.html',
  styleUrls: ['./new-sous-tache.component.css'],
  providers: [SousTacheServices,Tache,SousTache]
})
export class NewSousTacheComponent implements OnInit {






  tache:Tache;
  sousTache: SousTache;
  idTache : number ;
  constructor(private sousTacheService: SousTacheServices,activatedRoute : ActivatedRoute ,tache1:Tache,sousTache1: SousTache)
  {
      this.idTache= activatedRoute.snapshot.params['id'];
      this.tache=tache1;
      this.tache.setId(this.idTache);
      this.sousTache= sousTache1;
      this.sousTache.tacheSousTache=tache1;


  }





  /*sousTache : SousTache = new SousTache("",0,"",0,this.tache);*/







  ngOnInit() {

   /* this.sousTache.tacheSousTache.setId(1);*/
/*this.tache.setId(this.nb);*/
  }


  save() {
    this.sousTacheService.saveSousTache(this.sousTache).subscribe(
      data => {
        this.sousTache = data;
      },
      err => {
        console.log(err);
      }

    );
  }
}
