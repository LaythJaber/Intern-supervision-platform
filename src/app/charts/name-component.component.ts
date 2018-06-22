
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import {AvancementServices} from "../../Services/Avancement.services";
import {ActivatedRoute} from "@angular/router";
import {Avancement} from "../../Model/Avancement";
import {SousTacheServices} from "../../Services/SousTache.service";
import {Stagiaire} from "../../Model/Stagiaire";
import {SousTache} from "../../Model/SousTache";


@Component({
  selector: 'ngx-echarts-line',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
  providers:[AvancementServices,SousTacheServices]
})
export class NameComponentComponent implements AfterViewInit {
  private Avancements: Avancement[] = [];
  Progressions: any[] = [];
  Unites: any[] = [];
  Perfect: any[] = [];

  idFkSousTache: number;

  sousTache : SousTache;

  constructor(private AvancementService: AvancementServices, activatedRoute: ActivatedRoute, private sousTacheService : SousTacheServices) {
    this.idFkSousTache = activatedRoute.snapshot.params['idSousTache'];

  }

  ngAfterViewInit() {


      this.getAllAvancements(this.idFkSousTache);

    }


  options: any = {};
  themeSubscription: any;




  getAllAvancements(idfk: number) {
   this.sousTacheService.findById(idfk).subscribe(
     data => {
       this.sousTache = data ;
       this.AvancementService.findByFkSousTache(idfk).subscribe(
         data => {
           this.Avancements = data;
           var i: number = 0;
           for (let a of this.Avancements) {

             this.Progressions[i] = a["progression"];
             i++
           }



           for (let j = 0; j <= this.sousTache.estimation; j++) {

             this.Perfect[j] = j * (100 / this.sousTache.estimation );
             this.Unites[j] = j;
           }



           this.options = {
             title: {
               text: ''
             },
             tooltip : {
               trigger: 'axis'
             },

             toolbox: {
               feature: {
                 saveAsImage: {}
               }
             },
             grid: {
               left: '3%',
               right: '4%',
               bottom: '3%',
               containLabel: true
             },
             xAxis : [
               { name:'iteration',
                 type : 'category',
                 boundaryGap : false,
                 data : this.Unites
               }
             ],
             yAxis : [
               {
                 type : 'value'
               }
             ],
             series : [
               {
                 name:'Real life',
                 type:'line',

                 areaStyle: {normal: {}},
                 data:  this.Progressions
               },
               {
                 name:'Perfect',
                 type:'line',

                 areaStyle: {normal: {}},
                 data: this.Perfect
               }

             ]
           }



         },

         err => {
           console.log(err);
         }
       );


     },

      error => {console.log(error);}
  );
}





}
