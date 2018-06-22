import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import {ActivatedRoute} from "@angular/router";
import {Stagiaire} from "../../Model/Stagiaire";
import {StagiaireServices} from "../../Services/Stagiaire.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers : [StagiaireServices,Stagiaire]
})
export class HeaderComponent implements OnInit {

  idstg:number;
  /*@Input()*/ position = 'normal';

  user: any;
  picture= 'assets/images/user.png';
  userMenu ;
stg : Stagiaire;
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,activatedRoute : ActivatedRoute, stag : Stagiaire,private stagiaireService : StagiaireServices)
  { this.idstg=activatedRoute.snapshot.params['id'];
  this.stg =stag;
    this.userMenu = [
      { title: 'Profil', link: '/stagiaire/'+this.idstg}, { title: 'Logout',link: '/logout/'+this.idstg}];
  }

  ngOnInit() {
   /* this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);*/

    this.stagiaireService.findById(this.idstg).subscribe(
      data => {
       this.stg = data;
          },
          error => {
            console.log(error);
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
