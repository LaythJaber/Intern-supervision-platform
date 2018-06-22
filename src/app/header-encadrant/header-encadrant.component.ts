import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import {ActivatedRoute} from "@angular/router";
import {EncadrantServices} from "../../Services/Encadrant.service";
import {Encadrant} from "../../Model/Encadrant";
import {StagiaireServices} from "../../Services/Stagiaire.service";
import {Stagiaire} from "../../Model/Stagiaire";
@Component({
  selector: 'app-header-encadrant',
  templateUrl: './header-encadrant.component.html',
  styleUrls: ['./header-encadrant.component.scss'],
  providers: [EncadrantServices,Encadrant,Stagiaire,StagiaireServices]
})
export class HeaderEncadrantComponent implements OnInit {

  idstg:number;
  /*@Input()*/ position = 'normal';
idEnc:number;

enc : Encadrant;
  stg : Stagiaire;
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,activatedRoute : ActivatedRoute,private encadrantService: EncadrantServices,
              encd : Encadrant,private stagiaireService : StagiaireServices, stagiaire : Stagiaire)
  { this.idstg=activatedRoute.snapshot.params['id'];
    this.enc=encd;
    this.stg =stagiaire;


  }

  ngOnInit() {
    this.stagiaireService.findById(this.idstg).subscribe(
      data => {
        this.stg = data;
      },
      error => {
        console.log(error);
      });
    this.encadrantService.findByUsername().subscribe(
      data => {
        this.enc = data;
        this.idEnc=this.enc.idPersonne;

      },
      err => {
        console.log(err);
      });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }


}
