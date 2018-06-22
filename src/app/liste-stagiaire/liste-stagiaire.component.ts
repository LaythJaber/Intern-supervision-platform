import { Component, OnInit ,Inject} from '@angular/core';
import { StagiaireServices } from '../../Services/Stagiaire.service';
import { Stagiaire} from '../../Model/Stagiaire';
import { error } from 'util';
import {ActivatedRoute, Router} from '@angular/router';
import {AutheticationService} from "../../Services/Authetication.service";

@Component({
  selector: 'app-liste-stagiaire',
  templateUrl: './liste-stagiaire.component.html',
  styleUrls: ['./liste-stagiaire.component.scss'] ,
  providers :[Stagiaire,StagiaireServices]

})
export class ListeStagiaireComponent implements OnInit {
  Stagiaire:Stagiaire ;
  Stagiaires ;
  idEnc : number;
  NomProjet:string;
  constructor( private authService:AutheticationService,private StagiaireServices:StagiaireServices, public Stagiaire1:Stagiaire,private  router:Router, activatedRoute : ActivatedRoute) {
    this.Stagiaire =Stagiaire1 ;
    this.idEnc=activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
    this.getStagiare(this.idEnc);
  }
  getStagiare(id:number)
  {
    this.StagiaireServices.findByIdEncadrant(id).subscribe (
      data=> {
        this.Stagiaires=data;
        console.log(data);


      },
      err=>
      { console.log(err);}
    )



  }

  logout()
  {
    this.authService.logout();
    this.router.navigateByUrl ("/login");
  }
  Consulter (id :number )

  {

    this.router.navigate(['fiche-stagiaire',this.idEnc,id]);

  }
  Verifier (s:Stagiaire)
  {
   // if (s.projetStagiaire==null)
   this.NomProjet="non désigné"
   /*else
   this.NomProjet=s.projetStagiaire.nomProjet;*/
  }



}
