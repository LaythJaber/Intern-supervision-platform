import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AutheticationService} from "../../Services/Authetication.service";

@Component({
  selector: 'app-accueil-responsable',
  templateUrl: './accueil-responsable.component.html',
  styleUrls: ['./accueil-responsable.component.css']
})
export class AccueilResponsableComponent implements OnInit {

  constructor(private authService:AutheticationService,private router:Router) { }

  ngOnInit() {
  }

  logout()
  {
    this.authService.logout();
    this.router.navigateByUrl ("/login");
  }

}
