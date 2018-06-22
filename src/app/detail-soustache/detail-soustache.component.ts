import { Component, OnInit } from '@angular/core';
import {NbThemeService} from "@nebular/theme";


@Component({
  selector: 'app-detail-soustache',
  templateUrl: './detail-soustache.component.html',
  styleUrls: ['./detail-soustache.component.scss']
})
export class DetailSoustacheComponent implements OnInit {


  constructor(/*private themeService: NbThemeService*/) { }


  ngOnInit() {
   /* this.enableDarkTheme();*/


  }

  /*enableDarkTheme() {
    this.themeService.changeTheme('dark');
  }*/

}
