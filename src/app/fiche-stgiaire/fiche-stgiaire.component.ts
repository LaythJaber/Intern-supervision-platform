import {MAT_DIALOG_DATA, MatDialogRef,  MatDialog} from '@angular/material';
import { Component, OnInit,Inject } from '@angular/core';
import {Stagiaire} from "../../Model/Stagiaire";
import {Competence} from "../../Model/Competence";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireServices} from "../../Services/Stagiaire.service";
import {CompetenceServices} from "../../Services/Competence.service";
import {EncadrantServices} from "../../Services/Encadrant.service";
import {ProjetServices} from "../../Services/Projet.service";
import {Projet} from "../../Model/Projet";
import {Encadrant} from "../../Model/Encadrant";
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';
import { PerformanceServices } from '../../Services/Performance.service';
import { Performance } from '../../Model/Performance';




@Component({
  selector: 'app-fiche-stgiaire',
  templateUrl: './fiche-stgiaire.component.html',
  styleUrls: ['./fiche-stgiaire.component.css'],
  providers: [StagiaireServices,Stagiaire,CompetenceServices,Competence,ProjetServices,Projet,Encadrant,EncadrantServices,Performance,PerformanceServices]
})

export class FicheStgiaireComponent implements OnInit {
  config: ToasterConfig;

  position = 'toast-center';
  animationType = 'fade';
  title = 'Stagiaire integré à Sopra ! ';
  content = ``;
  timeout = 5000;
  toastsLimit = 5;
  type = 'success';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;



  AllProjets:Projet[]
  ngOnInit() {
    this.projetServicea.findAll().subscribe(
      data=> {this.AllProjets=data
        console.log(this.AllProjets)}
    );
    this.getAllEncadrant() ;
    this. getAllProjetNames();

    this.getStagiaireById(this.idStg);
    this.getAllCompetenceByIdStagiaire(this.idStg);
    //this.stg.roles=null;
  }
  stg: Stagiaire;
Performance:Performance;
  Encadrants;
  projeta;
  encadranta;
  Projets;
  Stagiaires;
  NomProjet;
  idStg: number;
  stg1 :Stagiaire;
Performances:Performance[];
  disabled: boolean = true;

  newCompetence: Competence;

  Competences;

  test: boolean = false;

  constructor(private router:Router,private toasterService: ToasterService,public dialog: MatDialog,activatedRoute: ActivatedRoute, private stagiaireServicea: StagiaireServices, stagiairea: Stagiaire, private competenceServicea: CompetenceServices, competencea: Competence,private encadrantServicea:EncadrantServices,private projetServicea:ProjetServices,projet1:Projet,encadrant1:Encadrant,private PerformanceServices:PerformanceServices,public Performance1:Performance) {
    this.idStg = activatedRoute.snapshot.params['id'];
    this.stg = stagiairea;
    this.stg1 = stagiairea;
    this.newCompetence = competencea;
    this.encadranta=encadrant1;
    this.projeta=projet1 ;
    this.newCompetence.validation = false;
this.Performance=Performance1;
  }
  getStagiaireById(id: number) {
    this.stagiaireServicea.findById(id).subscribe(
      data => {
        this.stg = <Stagiaire>data;
        this.newCompetence.stagiaireCompetence = this.stg;
        console.log (this.stg)
      },
      err => {
        console.log(err);
      }
    );
  }
  getAllCompetenceByIdStagiaire(id: number) {
    this.competenceServicea.findAllById(id).subscribe(
      data => {
        this.Competences = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getAllEncadrant() {
    this.encadrantServicea.findAll().subscribe(
      data => {

        this.Encadrants = data;

        // console.log ( data)
      },
      err => {
        console.log(err);
      }
    );
  }
  getAllProjetNames() {
    this.projetServicea.findAllProjectsNames().subscribe(

      data => {
        this.Projets = <Projet>data;

        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }




  getAllStagiaire(nom:string) {
    this.stagiaireServicea.findStagiaireProjet(nom).subscribe(

      data => {
        this.Stagiaires= data;

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
  add(event:any)
  {this.stg.projetStagiaire=null;

    this.projeta.nomProjet=this.NomProjet;
    this.projeta.estimation=50;
    this.projeta.dateDebut= "00/00/0000"
    this.projeta.dateFin =  "00/00/0000"

      this.projetServicea.saveProjet(this.projeta).subscribe(

        data => {
          /*
              this.proj=data;
                            console.log(data) ;*/

          this.stg.projetStagiaire=<Projet>data;
          console.log(this.stg.projetStagiaire);
        },
        err => {
          console.log(err);
        }

      );



    event.target.disabled= true ;
    this.makeToast();
  }

  i :number =0;
  j:number =0;
  x :number =0;
  s:number =0;
  similitude :number[]=[];

  Compare ()
  {this.FiltredProjects=[];
    console.log(this.Competences)
    console.log (this.AllProjets)
    for(this.i=0;this.i<this.AllProjets.length;this.i++)
    {
      for (this.j=0;this.j<this.AllProjets[this.i].projetCompetences.length;this.j++)
      {
        for (this.x=0;this.x<this.Competences.length;this.x++)
          if  (this.Competences[this.x].nomCompetence==this.AllProjets[this.i].projetCompetences[this.j].nomCompetence)
            this.s++;


      }
      this.similitude.push(this.s);
      this.s=0;


    }


    console.log(this.similitude);
    //this.TriSimilitude();
    console.log(this.AllProjets)
    this.filter();
    this.TriSimilitude();


  }
  Contunie:boolean=false;
  ProjetPermut:Projet ;
  permut :number;
  TriSimilitude ()
  {
    while (!this.Contunie)
    {this.Contunie=true;
      for (this.i=0;this.i<this.similitude.length;this.i++)
      {if (this.similitude[this.i]<this.similitude[this.i+1])
      {
        this.permut=this.similitude[this.i];
        this.similitude[this.i]=this.similitude[this.i+1];
        this.similitude[this.i+1]=this.permut;
        this.ProjetPermut=this.AllProjets[this.i];
        this.AllProjets[this.i]=this.AllProjets[this.i+1]
        this.AllProjets[this.i+1]=this.ProjetPermut;
        console.log("ok");
        this.Contunie=false;}




      }





    }
    console.log(this.similitude);
    console.log(this.AllProjets);


  }



  FiltredProjects:Projet[]=[];
  filter ()
  {
    for (this.i=0;this.i<this.AllProjets.length;this.i++)
    {

      if (this.similitude[this.i]>=this.Competences.length/2)
      {console.log("ok1");
        this.FiltredProjects.push(this.AllProjets[this.i])}

    }
    console.log (this.FiltredProjects)
    this.openDialog();
    //console.log(this.similitude);
    //this.TriSimilitude();
    // console.log(this.AllProjets)
  }


  openDialog(): void {



    let dialogRef = this.dialog.open(ProjetsComponent, {
      width: '600px',
      data: {

        Projets: this.FiltredProjects


      }
    });
  }
  recuperatePerformances(login: string) {

        this.PerformanceServices.findAllPerformancesByLogin(login).subscribe(data => {
            this.Performances = data;
            this.openDialog1(this.stg);

            console.log(data);


          },
          err => {
            //  console.log(err);
          }

        );

      }

  declenchePerformances(s: Stagiaire) {
    this.recuperatePerformances(this.stg.login)



  }
  openDialog1(s: Stagiaire): void {


        this.Performance.stagiairePerformance = s;
        let dialogRef = this.dialog.open(PerformanceComponent, {
          width: '600px',
          data: {

            Performances: this.Performances


          }
        });
      }

  declenche ()
  {if (this.NomProjet!=null)
    this.getAllStagiaire(this.NomProjet);}

  save() {


    this.stg.stagiaireCompetences=null;
    console.log (this.stg);
    this.stg1.encadrantStagiaire=this.stg.encadrantStagiaire;
    this.stg1.etablissement_formation=this.stg.etablissement_formation
    this.stg1.idPersonne =this.stg.idPersonne;
    this.stg1.login=this.stg.login
    this.stg1.nom=this.stg.nom
    this.stg1.password=this.stg.password
    this.stg1.prenom=this.stg.prenom
    this.stg1.projetStagiaire=this.stg.projetStagiaire
    this.stg1.stagiaireCompetences=this.stg.stagiaireCompetences

    this.stagiaireServicea.updateStagiaire(this.idStg,this.stg1).subscribe(

      data => {
        this.stg=<Stagiaire> data;
        this.router.navigate(["/responsable/"]);

        //console.log(data) ;
      },
      err => {
        console.log(err);this.router.navigate(["/responsable/"]);

      }

    );




  }


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

@Component({
  selector: 'app-projet',
  templateUrl: './projet.html',
  providers: []
})
export class ProjetsComponent {

  constructor(public dialogRef: MatDialogRef<ProjetsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)

  }

  onNoClick(): void {
    this.dialogRef.close();

  }





}
@Component({
  selector: 'app-performance',
  templateUrl: './performance.html',
  providers: []
})
export class PerformanceComponent {
  Performances: Performance[];
  constructor(public dialogRef: MatDialogRef<PerformanceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)

  }

  onNoClick(): void {
    this.dialogRef.close();
  }





}
