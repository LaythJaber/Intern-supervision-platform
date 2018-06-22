import { Component, OnInit } from '@angular/core';
import {TacheServices} from "../../Services/Tache.service";
import {Tache} from "../../Model/Tache";
import {SousTacheServices} from "../../Services/SousTache.service";
import {SousTache} from "../../Model/SousTache";
import {AvancementServices} from "../../Services/Avancement.services";
import {Avancement} from "../../Model/Avancement";
import {ActivatedRoute, Router} from "@angular/router";
import {Stagiaire} from "../../Model/Stagiaire";
import {StagiaireServices} from "../../Services/Stagiaire.service";
import {AutheticationService} from "../../Services/Authetication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  providers:[TacheServices,SousTacheServices,AvancementServices,Avancement,StagiaireServices,AutheticationService]
})
export class LogoutComponent implements OnInit {
Taches : Tache[];
SousTaches: SousTache[];
Avancements =[];
avancement : Avancement;
avancement2 :Avancement;
avancement3:Avancement;
idstg :number;
stg : Stagiaire
  constructor(public router: Router,activatedRoute : ActivatedRoute,private tacheService:TacheServices,private  souTacheService : SousTacheServices,private avancementService: AvancementServices,avancement :Avancement,avancement2:Avancement,private  stagiaireService : StagiaireServices,
              private authService:AutheticationService) {
    this.avancement3=avancement2;
    this.avancement2=avancement;
    this.idstg= activatedRoute.snapshot.params['id'];
  }



  ngOnInit() {
    this.getAllTachesByProject();
    this.getAllSousTaches();

  }


  getAllTachesByProject() {
    this.stagiaireService.findById(this.idstg).subscribe(
      data => {
        this.stg = data;
        this.tacheService.findAllByProject(this.stg.projetStagiaire.idProjet).subscribe(
          data => {
            this.Taches = data;
            for (this.i=0;this.i<this.Taches.length;this.i++)
            {this.avancementService.findMaxByfkTache(this.Taches[this.i].idTache).subscribe(
            data=>{this.Max =data.progression ;
              console.log (this.Max);
              if  (this.Max<100)
              {
          this.achieved=false;
            console.log("done");
              }



            }

            )

            }
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
    this.souTacheService.findAllEnCours().subscribe(
      data => {
        this.SousTaches = data;
        for(let st of this.SousTaches)
        {

           this.avancementService.findMaxByfkSousTache(st.idSousTache).subscribe(
            data => {
              this.avancement2 = data;
              this.Avancements.push(this.avancement2); },
             err => {
               console.log(err);

             }

           );
         /* console.log(this.getMaxProg(st.idSousTache));*/
        }

       /* console.log(this.Avancements);*/
        /*this.getAllAvancement(this.SousTaches);*/
      },
      err => {
        console.log(err);
      }
    );
  }







  addAvancement(event:any,tache : Tache,avc: Avancement,avancWithFK : Avancement) {
avc.sousTacheAvancement=avancWithFK.sousTacheAvancement;
avc.iteration= tache.iterationActuelle;
    this.avancementService.saveAvancement(avc).subscribe(
      data => {
        avc = data;
      },
      err => {
        console.log(err);
      }
    );
event.target.disabled= true ;


  }

updateIteration(event,tache)
{ /*var tache2: Tache;*/
  event.target.disabled= true ;
  this.tacheService.updateIteration(tache.idTache,tache).subscribe(
    data => {
      tache = data;
     /* this.Taches[this.Taches.indexOf(tache)]=tache2;*/
    },
    err => {
      console.log(err);
    }
  );

  this.reloadList();
}

  addAvancementTache(event,tache)
  {
    event.target.disabled= true ;
    this.avancementService.newAvancementTache(tache).subscribe(
      data => {
        tache = data;
      },
      err => {
        console.log(err);
      }
    );

  }


  reloadList() {
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(() =>
      this.router.navigate(["/logout/"+this.idstg]));
  }

  i:number=0;
  achieved :boolean =true ;
  Max :number ;
    logout()
    {
      this.authService.logout();
      this.router.navigateByUrl ("/login");
    console.log (this.Taches)
if  (this.achieved)
console.log("in");
  this.stagiaireService.export(this.idstg).subscribe(data=>{console.log(data)});


    }

}
