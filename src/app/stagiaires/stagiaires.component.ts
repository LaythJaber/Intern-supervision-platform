import { Component, OnInit } from '@angular/core';

import { error } from 'selenium-webdriver';
import { RootRenderer } from '@angular/core/src/render/api';
import { Router } from '@angular/router';
import { Stagiaire } from '../../Model/Stagiaire';
import {AutheticationService} from "../../Services/Authetication.service";
@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.scss'],
  providers: [ Stagiaire]
})
export class StagiairesComponent implements OnInit {
  stagiaires ;
  Stagiairea : Stagiaire
  NomProjet :string;
  constructor(public authService:AutheticationService,private  router:Router ,private Stagiaire1:Stagiaire) {this.Stagiairea=Stagiaire1 }

  ngOnInit() {
    this.authService.getStagiaires()
      .subscribe (data=>{
          this.stagiaires =data;
          //console.log (data);
          // console.log (this.stagiaires);
        },
        err=>
        {
          this.authService.logout();
          this.router.navigateByUrl('/login');

        }


      );

  }
  Consulter (id:number)

  {

    this.router.navigate(['fichestgiaire',id]);

  }

  logout()
  {
    this.authService.logout();
    this.router.navigateByUrl ("/login");
  }

  onNewStgiaire()
  {
    this.router.navigateByUrl('/new-stgiaire')
  }
  Verifier (s:Stagiaire)
  {
    if (s.projetStagiaire==null)
   this.NomProjet="non désigné"
   else
   this.NomProjet=s.projetStagiaire.nomProjet;
  }
}
