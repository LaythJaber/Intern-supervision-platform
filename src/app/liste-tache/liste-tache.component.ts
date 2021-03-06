import { Component, OnInit,Inject } from '@angular/core';
import {Tache} from "../../Model/Tache";
import {TacheServices} from "../../Services/Tache.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SousTacheServices} from "../../Services/SousTache.service";
import {SousTache} from "../../Model/SousTache";
import {MatExpansionModule} from '@angular/material/expansion';
import {Avancement} from "../../Model/Avancement";
import {AvancementServices} from "../../Services/Avancement.services";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {JwtHelper} from 'angular2-jwt';
import {StagiaireServices} from "../../Services/Stagiaire.service";
import {Stagiaire} from "../../Model/Stagiaire";
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'app-liste-tache',
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.css'],

  providers: [TacheServices,SousTacheServices,SousTache,Avancement,AvancementServices,Tache,StagiaireServices,Stagiaire]
})
export class ListeTacheComponent implements OnInit {

  modeSousTache :boolean =false;
  /*showBtn=1;*/
  panelOpenState: boolean = false;
  private Taches: Tache[];
  private SousTaches: SousTache[];
  /*private avencementById: Tache;
  private dte: Date;
  private nb: number;
  private result: boolean;
*/
  notif : any;
  stg: Stagiaire ;
  p: number;
  tache: Tache;
  sousTache: SousTache;
  sousTache2: SousTache;
  avc : Avancement;
  newSousTache : SousTache;
idstg:number;

config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  title = 'Bravo ! ';
  content = ` Vous etes sur le bon rythme continuez !`;
  timeout = 5000;
  toastsLimit = 5;
  type = 'success';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  types: string[] = ['default', 'info', 'success', 'warning', 'error'];
  animations: string[] = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
  positions: string[] = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
    'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];



  /*showitemsoustache = 1;*/
  constructor(public dialog: MatDialog, private TacheService: TacheServices, public router: Router, private  sousTacheService: SousTacheServices,
              avancement:Avancement,private AvancementService:AvancementServices,nSousTache : SousTache,activatedRoute : ActivatedRoute ,
              private stagiaireService: StagiaireServices,stagiaire: Stagiaire,private toasterService: ToasterService) {
    /*this.tache=tache1;*/
    this.avc=avancement;
    this.newSousTache = nSousTache;
    this.stg=stagiaire;
    this.idstg=activatedRoute.snapshot.params['id'];

/*
    let jwtHelper =new JwtHelper();
    this.jwtToken=localStorage.getItem('token');
    this.compte=jwtHelper.decodeToken(this.jwtToken).login;
    console.log(this.compte);*/



  }



  openDialog(t:Tache): void {
    this.newSousTache.tacheSousTache=t;
    let dialogRef = this.dialog.open(NewTacheComponent, {
      width: '600px',
      data: { sousTache : this.newSousTache }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newSousTache = result;
      this.sousTacheService.saveSousTache(this.newSousTache).subscribe(
        data2 => {
          this.newSousTache = data2;
          this.reloadList();
          },
        err => {
          console.log(err);
        }

      );

    });

    /*this.SousTaches.push(this.newSousTache);*/
  }

  ngOnInit() {

 this.AvancementService.notification(this.idstg).subscribe(
   data => {

      this.notif = data;

      if(this.notif)
      {this.makeToast();}
      else
      {this.title='Accelerez un peu vous etes en retard !';
      this.content='Bon Courage !';
      this.type='warning';
        this.makeToast();}
      },
  error => { console.log(error);}

);
    this.getAllTaches();
    this.getAllSousTaches();


  }






  getAllTaches() {

    this.stagiaireService.findById(this.idstg).subscribe(
      data => {
        this.stg = data;

        this.TacheService.findAllByProject(this.stg.projetStagiaire.idProjet).subscribe(
          data => {
            this.Taches = data;
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );

  }

  getAllSousTaches() {
    this.sousTacheService.findAllOrdered().subscribe(
      data => {
        this.SousTaches = data;
      },
      err => {
        console.log(err);
      }
    );
  }




  OnDeleteSousTache(sousTache: SousTache) {


    this.sousTacheService.deleteById(sousTache.idSousTache).subscribe(
      () => {

        console.log('Sous Tache supprimée');
      },
      (error) => {
        console.log(error);
      }
    );
    this.SousTaches.splice(this.SousTaches.indexOf(sousTache),1);
    /*this.reloadList();*/
    /* this.showitemsoustache= -1;*/

  }





  VersNewSousTache(id: number) {
    this.router.navigate(['newSousTache', id]);

  }

  VersPageSousTache(id: number) {
    this.router.navigate(['avancement', id]);

  }

  up(id: number, sousTache: SousTache) {
    this.sousTacheService.upPriorite(id, sousTache).subscribe(
      data => {
        this.sousTache = data;
      },
      err => {
        console.log(err);
      }
    );
   /* this.reloadList();*/
   /*this.sousTache2=sousTache;*/
   /*if(   this.SousTaches[this.SousTaches.indexOf(sousTache)-1].priorite < this.SousTaches[this.SousTaches.indexOf(sousTache)].priorite  ) {
   */ /* if(this.SousTaches[this.SousTaches.indexOf(sousTache) - 1]) {
      var x = this.SousTaches.indexOf(sousTache);
      this.SousTaches[x] = this.SousTaches[x - 1];
      this.SousTaches[x - 1] = sousTache

    }*/

this.SousTaches.sort(this.compareup);
  }

  comparedown(a,b) {
    if (a.priorite < b.priorite)
      return -1;
    if (a.priorite > b.priorite)
      return 1;
    return 0;
  }
  compareup(a,b) {
    if (a.priorite > b.priorite)
      return -1;
    if (a.priorite < b.priorite)
      return 1;
    return 0;
  }
  enCours(id: number, sousTache: SousTache) {
    sousTache.etat=2;
    this.sousTacheService.updateSousTache(id, sousTache).subscribe(
      data => {
        this.sousTache = data;
      },
      err => {
        console.log(err);
      }
    );
   /* this.reloadList();*/
  }

  enAttente(id: number, sousTache: SousTache) {
    sousTache.etat=1;
    this.sousTacheService.updateSousTache(id, sousTache).subscribe(
      data => {
        this.sousTache = data;
      },
      err => {
        console.log(err);
      }
    );
   /* this.reloadList();*/
  }

  done(id: number, sousTache: SousTache) {
    sousTache.etat=0;
    this.sousTacheService.updateSousTache(id, sousTache).subscribe(
      data => {
        this.sousTache = data;
      },
      err => {
        console.log(err);
      }
    );
   /* this.reloadList();*/
  }


  down(id: number, sousTache: SousTache) {
    this.sousTacheService.downPriorite(id, sousTache).subscribe(
      data => {
        this.sousTache = data;
      },
      err => {
        console.log(err);
      }
    );
    this.SousTaches.sort(this.comparedown);
    /*
    if(this.SousTaches[this.SousTaches.indexOf(sousTache) +1]) {
   var x = this.SousTaches.indexOf(sousTache);
      this.SousTaches[x] = this.SousTaches[x + 1];
      this.SousTaches[x + 1] = sousTache;
   }*/
  }

  reloadList() {
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(() =>
      this.router.navigate(["/accueilStagiaire/"+this.idstg]));
  }


  upTache(id: number, tache: Tache) {
    this.TacheService.upPriorite(id,tache).subscribe(
      data => {
        this.tache = data;
      },
      err => {
        console.log(err);
      }
    );

     if(this.Taches[this.Taches.indexOf(tache) - 1]) {
      var x = this.Taches.indexOf(tache);
      this.Taches[x] = this.Taches[x - 1];
      this.Taches[x - 1] = tache;
      /* }*/
    }
  }

  downTache(id: number, tache: Tache) {
    this.TacheService.downPriorite(id,tache).subscribe(
      data => {
        this.tache = data;
      },
      err => {
        console.log(err);
      }
    );

    if(this.Taches[this.Taches.indexOf(tache) +1]) {
      var x = this.Taches.indexOf(tache);
      this.Taches[x] = this.Taches[x + 1];
      this.Taches[x + 1] = tache;
    }
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
  selector: 'app-new-tache',
  templateUrl: './new-tache.component.html',
  providers: []
})
export class NewTacheComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<NewTacheComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {}

  ngOnInit()
  {}

  onNoClick(): void {
    this.dialogRef.close();
    this.ngOnInit();
  }


}
