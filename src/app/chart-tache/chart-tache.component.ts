import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AvancementServices} from "../../Services/Avancement.services";
import {ActivatedRoute} from "@angular/router";
import {Avancement} from "../../Model/Avancement";
import {TacheServices} from "../../Services/Tache.service";
import {Tache} from "../../Model/Tache";

@Component({
  selector: 'app-chart-tache',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
  providers:[AvancementServices]
})
export class ChartTacheComponent implements AfterViewInit {

  private Avancements: Avancement[] = [];
  Progressions: any[] = [];
  Unites: any[] = [];
  Perfect: any[] = [];

  idFkTache: number;

  tache : Tache;

  constructor(private AvancementService: AvancementServices, activatedRoute: ActivatedRoute,private tacheService : TacheServices) {
    this.idFkTache = activatedRoute.snapshot.params['idTache'];

  }

  ngAfterViewInit() {

    if (this.idFkTache) {
      console.log(this.idFkTache);
      this.getAllAvancements(this.idFkTache);

    }
  }

  options: any = {};


  getAllAvancements(idfk: number) {
    this.tacheService.findById(idfk).subscribe(
      data => {
        this.tache = data ;
        this.AvancementService.findByFkTache(idfk).subscribe(
          data => {
            this.Avancements = data;
            var i: number = 0;
            for (let a of this.Avancements) {

              this.Progressions[i] = a["progression"];
              i++
            }


            for (let j = 0; j <= this.tache.estimation; j++) {

              this.Perfect[j] = j * (100 / this.tache.estimation );
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
