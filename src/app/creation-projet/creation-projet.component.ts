import * as moment from 'moment';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit ,Inject} from '@angular/core';
import { Projet } from '../../Model/Projet';
import { ProjetServices } from '../../Services/Projet.service';
import { Encadrant } from '../../Model/Encadrant';
import { EncadrantServices } from '../../Services/Encadrant.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Stagiaire } from '../../Model/Stagiaire';
import { Tache } from '../../Model/Tache';
import { TacheServices } from '../../Services/Tache.service';

import { Observable } from 'rxjs/Observable';
import { MOMENT } from 'angular-calendar';
import {AvancementServices} from "../../Services/Avancement.services";
import {Avancement} from "../../Model/Avancement";
import {Competence} from "../../Model/Competence";
import {CompetenceServices} from "../../Services/Competence.service";

@Component({
  selector: 'app-creation-projet',
  templateUrl: './creation-projet.component.html',
  styleUrls: ['./creation-projet.component.scss'],
  providers :[ProjetServices ,EncadrantServices,Projet ,Encadrant,TacheServices,Tache, AvancementServices , Avancement,Competence , CompetenceServices ]

})
export class CreationProjetComponent implements OnInit {
  ngOnInit() {
   /* this.getLastPerojectAdded()*/


  }

ok:boolean;
i=0;
  idEnc: number
  ProjetId: number;
  Taches = [];
  Tache: Tache;
  Projet: Projet;
  Projet2: Projet;
  t : Tache ;
avc : Avancement;
competence : Competence;
  comp1: string;
  comp2: string;
  comp3: string;
  comp4: string;
  niv1: number;
  niv2: number;
  niv3: number;
  niv4: number;

  constructor(private router:Router,private ActivatedRoute: ActivatedRoute, private ProjetServices: ProjetServices, private EncadrantServices: EncadrantServices, public Encadrant: Encadrant, public Projet1: Projet, private TacheServices: TacheServices, public Tache1: Tache,
              public dialog: MatDialog,private avancementService : AvancementServices,avanc : Avancement,private competenceService : CompetenceServices,cmp:Competence) {
    this.idEnc = ActivatedRoute.snapshot.params['id'];
    this.Projet = this.Projet1;
    this.Tache = this.Tache1;
    this.avc =avanc;
    this.competence = cmp;
  }

  openDialog(Projet: Projet): void {

//this.Tache.projetTache=Projet;
    let dialogRef = this.dialog.open(NewTacheComponent1, {
      width: '600px',
      data: {

        Tache: this.Tache

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.Tache = result;
      this.TacheServices.saveTache(this.Tache).subscribe(
        data => {
          this.t = data;
this.avc.tacheAvancement=this.t
          this.avancementService.saveAvancement(this.avc).subscribe(
            data => {
              this.avc = data;



            }
          )


        }
      )


      //  console.log (this.Tache)

      console.log(this.Taches)


    })
  }


  declenche() {
    this.openDialog(this.Projet);

  }


  addSkills(competence:Competence) {



    this.competenceService.saveCompetence(this.competence).subscribe(
      data => {
        this.competence = data;



        //
      },
      err => {
        console.log(err);
      }
    );
  }

  getEncadrantById(id: number) {
  }

  getLastPerojectAdded() {
    this.ProjetServices.findLastProject().subscribe(
      data => {


        console.log(data);

      }
    )
  }

  date1: Date;
  date2: Date;

  addtask(Tache: Tache) {
    console.log(this.date1)

    /*console.log (moment(this.Tache.date_debut).format("DD-MMM-YYYY h:mm:ss"));
this.date1=new Date (moment(this.Tache.date_debut).format("DD-MMM-YYYY h:mm:ss"));
    this.Tache.date_debut=moment(this.Tache.date_debut).format("DD-MMM-YYYY h:mm:ss")
    console.log(this.date1)*/

    this.TacheServices.saveTache(Tache).subscribe
    (
      data => {


      }
    )


  }
  confirm() {
    this.ok = true;
    this.i++;
  }



  save() {
    moment(this.Projet.dateDebut).format("DD-MMM-YYYY h:mm:ss")
    this.date1 = new Date();
    this.date2 = new Date(moment(this.Projet.dateFin).format("DD-MMM-YYYY h:mm:ss"));
    console.log(moment(this.Projet.dateDebut).format("DD-MM-YYYY h:mm:ss"));
    //this.Projet.dateDebut=moment(this.Projet.dateDebut).format("DD-MM-YYYY h:mm:ss");

    //this.Projet.dateFin=this.date2
    // this.Projet.estimation=50;
    this.EncadrantServices.findById(this.idEnc).subscribe(
      data2=> { // console.log(data);

        this.Projet.encadrantProjet=data2;
        this.ProjetServices.saveProjet(this.Projet).subscribe(
          data => {
            this.Projet = data;
            console.log( this.Projet);

            this.competence.projetCompetence=data;
            //this.Competence1.stagiaireCompetence=data1[0];
            //this.Competence2.stagiaireCompetence=data1[0];
            // this.Competence3.stagiaireCompetence=data1[0];
            if (this.comp1!=null&&this.niv1!=null)
            {this.competence.niveau = this.niv1;
              this.competence.nomCompetence = this.comp1;
              this.addSkills (this.competence) ;}
            if (this.comp2!=null&&this.niv2!=null)
            {this.competence.niveau = this.niv2;
              this.competence.nomCompetence = this.comp2;
              this.addSkills (this.competence) ;}
            if (this.comp3!=null&&this.niv3!=null)
            {
              this.competence.niveau = this.niv3;
              this.competence.nomCompetence = this.comp3;
              this.addSkills (this.competence) ;}
            if (this.comp4!=null&&this.niv4!=null)
            {this.competence.niveau = this.niv4;
              this.competence.nomCompetence = this.comp4;
              this.addSkills (this.competence) ;}

            this.TacheServices.findByProjet().subscribe(
              data1 => {
                console.log(data1);
                this.Taches = data1;
                for (var i = 0; i < this.Taches.length; i++) {
                  console.log("in")
                  this.Taches[i].projetTache = this.Projet;
                  this.TacheServices.updateTache(this.Taches[i].idTache, this.Taches[i]).subscribe(

                  )

                }


              }
            )


          }
        )

      }

    )
    this.router.navigate(["/encadrant/"+this.idEnc]);

  }


}






@Component({
  selector: 'app-nouvelleTache',
  templateUrl: './nouvelletache.html',
  providers: []
})
export class NewTacheComponent1 {

  constructor(public dialogRef: MatDialogRef<NewTacheComponent1>,
              @Inject(MAT_DIALOG_DATA) public data: any) {


  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


