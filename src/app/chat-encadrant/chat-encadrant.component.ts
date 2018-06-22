import { Component, OnInit } from '@angular/core';
import {Stagiaire} from "../../Model/Stagiaire";
import {Message} from "../../Model/Message";
import {MessageServices} from "../../Services/Message.service";
import {ActivatedRoute} from "@angular/router";
import {Encadrant} from "../../Model/Encadrant";

@Component({
  selector: 'app-chat-encadrant',
  templateUrl: './chat-encadrant.component.html',
  styleUrls: ['./chat-encadrant.component.css'],
  providers:[MessageServices,Message,Encadrant,Stagiaire]
})
export class ChatEncadrantComponent implements OnInit {

  Messages=[];
  encadrant:Encadrant;
  msg : Message;
  idEnc:number;
  contenu : String ="";
  idStg : number ;
  stagiaire : Stagiaire;
  constructor(private messageService :MessageServices,message : Message,activatedRoute : ActivatedRoute, encadrant : Encadrant, stg : Stagiaire) {

this.stagiaire = stg;
    this.idEnc=activatedRoute.snapshot.params['idEnc'];
    this.idStg=activatedRoute.snapshot.params['id'];
    this.encadrant = encadrant;
    this.encadrant.idPersonne=this.idEnc;
    this.stagiaire.idPersonne=this.idStg;
    this.msg=message;
    this.msg.encadrantMessage=this.encadrant;
    this.msg.stagiaireMessage=this.stagiaire;
  }



  ngOnInit() {
    this.contenu="";
    this.getAllMessages(this.idStg);
  }

  getAllMessages(id:number) {
    this.messageService.findAll(id).subscribe(
      data => {
        this.Messages = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  send(contenu)
  { this.msg.contenu=contenu;


    this.messageService.saveMessage(this.msg).subscribe(
      data => {
        this.msg = data;

        this.ngOnInit();

      },
      err => {
        console.log(err);
      }
    );
  }


}
