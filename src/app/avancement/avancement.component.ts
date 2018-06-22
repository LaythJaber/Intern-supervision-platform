import {Component, Input, OnInit} from '@angular/core';
import {AvancementServices} from "../../Services/Avancement.services";
import {Avancement} from "../../Model/Avancement";
import index from "@angular/cli/lib/cli";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-avancement',
  templateUrl: './avancement.component.html',
  styleUrls: ['./avancement.component.css'],
  providers: [AvancementServices]
})

export class AvancementComponent implements OnInit {
  /*@Input() idrecup ;*/
private Avancements : Avancement[];
Progressions:any[];
Unites:any[];
Perfect:any[];
idFk:number;
  id = 'chart1';
  width = 200;
  height = 250;
  type = 'zoomline';
  dataFormat = 'json';
  dataSource;
go:boolean=false;
tacheMode:boolean=false;
idFkTache:number;
  constructor(private AvancementService : AvancementServices,activatedRoute : ActivatedRoute) {

    this.idFkTache = activatedRoute.snapshot.params['id'];

   /* if (activatedRoute.snapshot.params['sousId'] == null) {
      this.tacheMode = true;*/

    this.idFk= activatedRoute.snapshot.params['sousId'];


     /*this.GO();*/
    /*
    this.dataSource = { "chart": {
      "caption": "Avancement Sous Tache : Layth",

      "xaxisname": "Unité",
      "yaxisname": "Progression",
      "numberprefix": "%",
      "theme": "fint"
    },
      "categories": [
        {
          "category": [
            {
              "label": "01"
            },
            {
              "label": "02"
            },
            {
              "label": "03"
            },
            {
              "label": "04"
            },
            {
              "label": "05"
            },
            {
              "label": "06"
            }

          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "Actual Revenue",
          "data": [
            {
              "value": "90"
            },
            {
              "value": "20"
            },
            {
              "value": "50"
            },
            {
              "value": "90"
            },
            {
              "value": "20"
            },
            {
              "value": "20"
            }
          ]
        },
        {
          "seriesname": "Projected Revenue",
          "renderas": "line",
          "showvalues": "0",
          "data": [
            {
              "value": "0"
            },
            {
              "value": "20"
            },
            {
              "value": "40"
            },
            {
              "value": "60"
            },
            {
              "value": "80"
            },
            {
              "value": "90"
            }
          ]
        },

      ]}
  }*/






  }


    ngOnInit() {

    if(this.idFk)
    {
      this.getAllAvancements(this.idFk);
    }



    }


GO(){

  this.Progressions = this.Avancements.map(o => {
    return { value: o.progression };
  });

  this.Unites = this.Avancements.map(o => {
    return { label: o.iteration };
  });



  var Perfect = [];
  for (let i = 1; i <= this.Avancements.length; i++) {
    let newvalue = {
      value :i*(100/this.Avancements.length)

    };
    Perfect.push(newvalue);
  }


  this.dataSource = { "chart": {
    "caption": "Avancement Sous Tache :",

    "xaxisname": "Unité",
    "yaxisname": "Progression",
    "numberprefix": "%",
    "theme": "fint"
  },
    "categories": [
      {
        "category": this.Unites
      }
    ],
    "dataset": [
      {
        "seriesname": "Actual Revenue",
        "data": this.Progressions
      },
      {
        "seriesname": "Projected Revenue",
        "renderas": "line",
        "showvalues": "0",
        "data": Perfect
      },

    ]}

this.go=true;



}
  getAllAvancements(idfk:number) {
    this.AvancementService.findByFkSousTache(idfk).subscribe(
      data => {
        this.Avancements = data;
      },

      err => {
        console.log(err);
      }
    );
  }

}

