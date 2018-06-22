import { Component, OnInit } from '@angular/core';
import {MessageServices} from "../../Services/Message.service";
import {Message} from "../../Model/Message";
import {ActivatedRoute} from "@angular/router";
import {Stagiaire} from "../../Model/Stagiaire";



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[MessageServices,Message,Stagiaire]
})
export class ChatComponent implements OnInit {
Messages=[];
stagiaire:Stagiaire;
msg : Message;
  idstg:number;
  contenu : String ="";
  constructor(private messageService :MessageServices,message : Message,activatedRoute : ActivatedRoute, stagiaire : Stagiaire) {

    this.idstg=activatedRoute.snapshot.params['id'];
    this.stagiaire = stagiaire;
    this.stagiaire.idPersonne=this.idstg;

    this.msg=message;
    this.msg.stagiaireMessage=this.stagiaire;
  }



  ngOnInit() {
  this.contenu="";
this.getAllMessages(this.idstg);
  }

  getAllMessages(id: number) {
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
