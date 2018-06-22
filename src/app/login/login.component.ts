import { Component, OnInit } from '@angular/core';

import { error } from 'selenium-webdriver';
import { RootRenderer } from '@angular/core/src/render/api';
import { Router } from '@angular/router';
import {AutheticationService} from "../../Services/Authetication.service";
import {Stagiaire} from "../../Model/Stagiaire";
import {StagiaireServices} from "../../Services/Stagiaire.service";
import {PointageServices} from "../../Services/Pointage.service";
import {Pointage} from "../../Model/Pointage";
import {EncadrantServices} from "../../Services/Encadrant.service";
import {Encadrant} from "../../Model/Encadrant";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AutheticationService,StagiaireServices,Stagiaire,PointageServices,Pointage,EncadrantServices,Encadrant]
})
export class LoginComponent implements OnInit {
  mode: number = 0;
  compte: Stagiaire;
  compteEnc: Encadrant;
  jwtToken: any;
  pointage: Pointage;

  constructor(private authService: AutheticationService, private router: Router, private stagiaireService: StagiaireServices, stagiaire: Stagiaire
    , private pointageService: PointageServices, ptg: Pointage, private encadrantService: EncadrantServices, encadrant: Encadrant) {
    this.pointage = ptg;
    this.compteEnc = encadrant;
    this.compte = stagiaire;
  }

  ngOnInit() {

  }

  onLogin(user) {

    this.authService.login(user)
      .subscribe(resp => {

          let jwt = resp.headers.get('authorization');

          this.authService.saveToken(jwt);

          if (this.authService.isStagiaire()) {

            this.stagiaireService.findByUsername().subscribe(
              data => {
                this.compte = data;
                this.pointage.stagiairePointage = this.compte;
                this.pointage.date_entree = new Date();
                this.pointage.date_sortie = null;
                this.router.navigateByUrl("/accueilStagiaire/" + this.compte.idPersonne);
                this.pointageService.savePointage(this.pointage).subscribe(
                  data => {
                    this.pointage = data;
                  },
                  error => {
                    console.log(error);
                  });

              },
              err => {
                console.log(err);
              }
            );
          }
          else if (this.authService.isResponsable()) {
            this.router.navigateByUrl("/responsable");
          }
          else if (this.authService.isEncadrant()) {

            this.encadrantService.findByUsername().subscribe(
              data => {
                this.compteEnc = data;
                this.router.navigateByUrl("/encadrant/" + this.compteEnc.idPersonne);

              },
              err => {
                console.log(err);
              });
          }


        },
        err => {
          console.log(err);
        });
  }

}
