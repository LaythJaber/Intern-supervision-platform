
import { Observable } from 'rxjs/Observable';

import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { Stagiaire } from '../../Model/Stagiaire';
import { Encadrant } from '../../Model/Encadrant';
import { Projet } from '../../Model/Projet';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import 'rxjs/add/operator/map'
import { Competence } from '../../Model/Competence';

import { Performance } from '../../Model/Performance';
import {StagiaireServices} from "../../Services/Stagiaire.service";
import {EncadrantServices} from "../../Services/Encadrant.service";
import {ProjetServices} from "../../Services/Projet.service";
import {CompetenceServices} from "../../Services/Competence.service";

import {PerformanceServices} from "../../Services/Performance.service";
import {Tache} from "../../Model/Tache";
import {TacheServices} from "../../Services/Tache.service";
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';
import { Avancement } from '../../Model/Avancement';
import { AvancementServices } from '../../Services/Avancement.services';


@Component({
  selector: 'app-new-stagiaire',
  templateUrl: './new-stagiaire.component.html',
  styleUrls: ['./new-stagiaire.component.css'],
  providers: [AvancementServices,Avancement,StagiaireServices, Stagiaire, Encadrant, EncadrantServices, Projet, ProjetServices, Competence, CompetenceServices, Performance, PerformanceServices,TacheServices,Tache]
})
export class NewStagiaireComponent implements OnInit {
  config: ToasterConfig;

  position = 'toast-center';
  animationType = 'fade';
  title = 'Nouveau projet Créé avec succes ! ';
  content = ``;
  timeout = 5000;
  toastsLimit = 5;
  type = 'success';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;


avc:Avancement;
  i: number = 0;
  public Encadrants: Encadrant[];
  public T1:Tache;
  public  Taches:Tache[];
  public Projets;
  public Projets1;
  public Stagiaires;
  comp1: string;
  comp2: string;
  comp3: string;
  comp4: string;
  niv1: number;
  niv2: number;
  niv3: number;
  niv4: number;
  mode: number = 0;
  ProjetFirst :Projet;
  Competence: Competence;
  Competence1: Competence;
  Competence2: Competence;
  Competence3: Competence;
  public proj;
  p: Performance;
  public Performances: Performance[];
  validate: boolean = true;
  permit?: boolean;
  ok: boolean;
  j:number=0;
  Stagiaire: Stagiaire;
  Encadrant: Encadrant;
  Stagiaire2: Stagiaire;
  Projet: Projet;
  NomProjet: string;
  login: string;
  Validate: any = false;
  etablissement_formation: string;
  stagiaireCompetences = [];
  constructor(private router:Router,private toasterService: ToasterService,public dialog: MatDialog, public stagiaireservices: StagiaireServices, public performanceServices: PerformanceServices, public CompetenceServices: CompetenceServices, private Stagiaire1: Stagiaire, private EncadrantServices: EncadrantServices, private Encadrant1: Encadrant, private ProjetServices: ProjetServices, private Projet1: Projet, public route: Router,/*public PerformanceServices:PerformanceServices*/public performance: Performance, public Competence7: Competence, public Competence4: Competence, public Competence5: Competence, public Competence6: Competence, public Stagiaire3: Stagiaire,private TacheServices:TacheServices,public Tache: Tache,avancement:Avancement,private avancementService:AvancementServices ) {
    this.Stagiaire = Stagiaire1;
    this.Encadrant = Encadrant1;
    this.Projet = Projet1;
    this.p = performance;
    this.Stagiaire2 = Stagiaire3;
    this.T1=Tache;
    this.Competence = Competence7
    this.Competence1 = Competence4
    this.Competence2 = Competence5
    this.Competence3 = Competence6
    this.avc=avancement;
  }

  ngOnInit() {
    this.getAllEncadrant();
    //this.getAllProjet();

    this.ValidatedProject();
    this.getAllProjetNames()
  }


  /*dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.newSousTache = result;
    this.SousTacheService.saveSousTache(this.newSousTache).subscribe(
      data2 => {
        this.newSousTache = data2;
      },
      err => {
        console.log(err);
      }

    );

  });*/

  //this.SousTaches.push(this.newSousTache);


  addSkills(Competence:Competence) {



    this.CompetenceServices.saveCompetence(this.Competence).subscribe(
      data => {
        this.Competence = data;



        //
      },
      err => {
        console.log(err);
      }
    );
  }


  ValidatedProject() {
    console.log(this.Stagiaire.projetStagiaire);
    if (this.NomProjet == null)
      this.Validate = false;
    else this.Validate = true;
  }

  getAllEncadrant() {
    this.EncadrantServices.findAll().subscribe(
      data => {

        this.Encadrants = data;
        console.log (data);
        // console.log ( data)
      },
      err => {
        // console.log(err);
      }
    );
  }

  confirm() {
       this.ok = true;
    this.j++;
  }
  getAllProjetNames() {
    this.ProjetServices.findAllProjectsNames().subscribe(

      data => {
        this.Projets = <Projet>data;

        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }


  getAllProjet(event:any,nom: string) {
    this.ProjetServices.findAllProjectsByName(nom).subscribe(

      data => {
        this.Projets1 = <Projet>data;
        console.log(data);
        this.Projets1 = data;
        console.log(data[0].dateDebut);
        console.log(data);

        this.add();
      },
      err => {
        console.log(err);
      }
    );

    event.target.disabled= true ;
    this.makeToast();

  }

  getAllStagiaire(nom: string) {
    this.stagiaireservices.findStagiaireProjet(nom).subscribe(

      data => {
        this.Stagiaires = data;

        console.log(data);
      },
      err => {
        console.log(err);
      }
    );

  }
  /*btnAjoutActivation()
  {
if  (this.Stagiaire.projetStagiaire!=null)
     this.validate=false;

  }*/
  add() {
    if (this.Stagiaire.projetStagiaire == null) {
      this.Projet.nomProjet = this.NomProjet;
      this.Projet.dateDebut = this.Projets1[0].dateDebut
      this.Projet.dateFin = this.Projets1[0].dateFin
      this.ProjetServices.saveProjet(this.Projet).subscribe(

        data => {


          this.ProjetServices.findFirstId(this.NomProjet).subscribe(

            data2=> {  this.ProjetFirst=data2;
                        console.log(data2);
              this.proj = data;
              console.log(data);

              this.Stagiaire.projetStagiaire = <Projet>data;
              console.log(this.Stagiaire.projetStagiaire.nomProjet)
              this.TacheServices.findByProjet1(this.ProjetFirst).subscribe(
                data1 => {
                  this.Taches = data1;
                  console.log(data1)
                  this.T1.projetTache = this.Stagiaire.projetStagiaire;
                  for (this.i = 0; this.i < this.Taches.length; this.i++) {
                    console.log("here")
                    this.T1.nomTache = this.Taches[this.i].nomTache;
                    this.T1.description = this.Taches[this.i].description;
                    this.T1.estimation = this.Taches[this.i].estimation;
                    this.T1.priorite = this.Taches[this.i].priorite;
                    this.TacheServices.saveTache(this.T1).subscribe(
                        data=>{ this.T1=data;

                          this.avc.tacheAvancement=this.T1;
                          this.avancementService.saveAvancement(this.avc).subscribe(
                            data => {
                              this.avc = data;



                            }
                          )

                        }


                    );

                  }


                }
              );
            }
        )
        },
        err => {
          //  console.log(err);
        }

      );
      // console.log(this.Stagiaire.projetStagiaire)


    }

  }

  declenche() {
    if (this.NomProjet != null)
      this.getAllStagiaire(this.NomProjet);
  }

  save() {




    /*this.Competence1.niveau=this.niv2;
    this.Competence2.niveau=this.niv3;
    this.Competence3.niveau=this.niv4;*/

    //  this.Competence.stagiaireCompetence =this.Stagiaire ;

    /*this.Competence1.nomCompetence=this.comp2 ;
    this.Competence2.nomCompetence=this.comp3 ;
    this.Competence3.nomCompetence=this.comp4 ;*/
    //this.addSkills(this.Competence);
    /*this.addSkills(this.Competence1)
    this.addSkills (this.Competence2)
    this.addSkills (this.Competence3)*/

    //this.Stagiaire.stagiaireCompetences.push (this.Competence1);
    //this.Stagiaire.stagiaireCompetences.push (this.Competence2)
    //this.Stagiaire.stagiaireCompetences.push (this.Competence3)
    //console.log(this.Stagiaire);
    this.stagiaireservices.saveStagiaire(this.Stagiaire).subscribe(

      data => {
        this.Stagiaire = data;
        this.stagiaireservices.findByLastId().subscribe (
          data1=> {

            this.Competence.stagiaireCompetence=data1[0];
            //this.Competence1.stagiaireCompetence=data1[0];
            //this.Competence2.stagiaireCompetence=data1[0];
            // this.Competence3.stagiaireCompetence=data1[0];
            if (this.comp1!=null&&this.niv1!=null)
            {this.Competence.niveau = this.niv1;
              this.Competence.nomCompetence = this.comp1;
              this.addSkills (this.Competence) ;}
            if (this.comp2!=null&&this.niv2!=null)
            {this.Competence.niveau = this.niv2;
              this.Competence.nomCompetence = this.comp2;
              this.addSkills (this.Competence) ;}
            if (this.comp3!=null&&this.niv3!=null)
            {
              this.Competence.niveau = this.niv3;
              this.Competence.nomCompetence = this.comp3;
              this.addSkills (this.Competence) ;}
            if (this.comp4!=null&&this.niv4!=null)
            {this.Competence.niveau = this.niv4;
              this.Competence.nomCompetence = this.comp4;
              this.addSkills (this.Competence) ;}





          })

        this.router.navigate(["/responsable/"]);
        }

      ,

      err => {
        this.mode = 1;
        //  console.log(err);
      }




    );



  }
  record ()
  {}


  // 0, 1, 2
  // waits 3 seconds, then logs "2".
  // because the observable takes 3 seconds to complete, and
  // the interval emits incremented numbers starting at 0




  makeToast() {
    this.showToast(this.type, this.title, this.content);


  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

}






