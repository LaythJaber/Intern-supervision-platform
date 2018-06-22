import { Component, OnInit } from '@angular/core';
import {EncadrantServices} from "../../Services/Encadrant.service";
import {Encadrant} from "../../Model/Encadrant";


@Component({
  selector: 'app-new-encadrant',
  templateUrl: './new-encadrant.component.html',
  styleUrls: ['./new-encadrant.component.css'],
  providers :[Encadrant,EncadrantServices]
})
export class NewEncadrantComponent implements OnInit {
  Encadrant1:Encadrant;
  constructor(public Encadrant:Encadrant,private EncadrantServices:EncadrantServices) {this.Encadrant1=Encadrant}

  ngOnInit() {
  }
  save()
  {
    this.EncadrantServices.saveEncadrant(this.Encadrant1).subscribe();

  }


}
