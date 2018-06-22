import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";


import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbSidebarService
} from '@nebular/theme';
/*import { NbSecurityModule } from '@nebular/security;*/

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {ToasterModule} from 'angular2-toaster';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FormsModule} from "@angular/forms";
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { AccueilStagiaireComponent } from './accueil-stagiaire/accueil-stagiaire.component';
import { NewSousTacheComponent } from './new-sous-tache/new-sous-tache.component';
import { NewTacheComponent } from './liste-tache/liste-tache.component';
import { ListeTacheComponent } from './liste-tache/liste-tache.component';
import { TestListComponent } from './test-list/test-list.component';
import { AvancementComponent } from './avancement/avancement.component';
import { PropositionComponent } from './proposition/proposition.component';
import { ProfilStagiaireComponent } from './profil-stagiaire/profil-stagiaire.component';
import { NameComponentComponent } from './charts/name-component.component';
import { EchartsComponent } from './charts/echarts.component';
import { DemoComponent } from './Calendar/demo/component';


//NGX Charts Imports
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular2-chartjs';
import {NgxChartsModule} from "@swimlane/ngx-charts";
//Charts imports
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import {DemoModule} from "./Calendar/demo/module";
import { DetailSoustacheComponent } from './detail-soustache/detail-soustache.component';
import { FicheSoustacheComponent } from './fiche-soustache/fiche-soustache.component';
import { LogoutComponent } from './logout/logout.component';
import { ChatComponent } from './chat/chat.component';
/*import { LoginComponent } from './login/login.component';
import {StagiairesComponent} from "./stagiaires/stagiaires.component";
import {NewStagiaireComponent} from "./new-stagiaire/new-stagiaire.component";*/
import {AutheticationService} from "../Services/Authetication.service";
import { LoginComponent } from './login/login.component';
import { NewStagiaireComponent } from './new-stagiaire/new-stagiaire.component';
import { StagiairesComponent } from './stagiaires/stagiaires.component';
import {HttpClientModule} from "@angular/common/http";
import { FicheTacheComponent } from './fiche-tache/fiche-tache.component';
import { DetailTacheComponent } from './detail-tache/detail-tache.component';
import { ChartTacheComponent } from './chart-tache/chart-tache.component';
import {FicheStgiaireComponent, ProjetsComponent,PerformanceComponent} from './fiche-stgiaire/fiche-stgiaire.component';
import { AccueilResponsableComponent } from './accueil-responsable/accueil-responsable.component';
import { AccueilEncadrantComponent } from './accueil-encadrant/accueil-encadrant.component';
import { ListeStagiaireComponent } from './liste-stagiaire/liste-stagiaire.component';
import { FicheStagiaireComponent } from './fiche-stagiaire/fiche-stagiaire.component';
import {PropositionListComponent, PropositionRectification} from './proposition-list/proposition-list.component';
import {CreationProjetComponent, NewTacheComponent1} from './creation-projet/creation-projet.component';
import { IdentiteStagiaireComponent } from './identite-stagiaire/identite-stagiaire.component';
import { ChatEncadrantComponent } from './chat-encadrant/chat-encadrant.component';
import { PropositionListeStagiaireComponent } from './proposition-liste-stagiaire/proposition-liste-stagiaire.component';
import { HeaderComponent } from './header/header.component';

//end charts imports


/*import { NgxChartsModule } from '@swimlane/ngx-charts';*/
/*import { DemoComponent } from './calendrier/demo/component';*/
/*import { DemoComponent } from './calendrier/calendrier.component';*/


import { DEFAULT_THEME } from './../theme.default';
import { COSMIC_THEME } from './../theme.cosmic';
import { TacheComponent } from './tache/tache.component';
import { HeaderEncadrantComponent } from './header-encadrant/header-encadrant.component';
import { ListeTacheEncadrantComponent } from './liste-tache-encadrant/liste-tache-encadrant.component';
import { DetailTacheEncadrantComponent } from './detail-tache-encadrant/detail-tache-encadrant.component';
import { DetailSoustacheEncadrantComponent } from './detail-soustache-encadrant/detail-soustache-encadrant.component';
import { NewEncadrantComponent } from './new-encadrant/new-encadrant.component';


FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

const appRoutes :Routes=[
  {path: 'accueilStagiaire', component: AccueilStagiaireComponent},
  {path: 'accueilStagiaire/:id', component: AccueilStagiaireComponent},
  {path: 'accueilStagiaire/:id/:sousId', component: AccueilStagiaireComponent},
  {path: 'newSousTache/:id', component: NewSousTacheComponent},
  {path: 'ListeTache', component: ListeTacheComponent},
  {path: 'avancement/:id', component: AvancementComponent},
  {path: 'proposition', component: PropositionComponent},
  {path: 'stagiaire/:id', component: ProfilStagiaireComponent},
  {path: 'test', component: TestListComponent},
  {path: 'charts/:id', component: NameComponentComponent},
  {path: 'echarts', component: EchartsComponent},
  {path: 'calendrier/:id', component: DemoComponent},
  {path: 'calendrier/:idEnc/:id', component: DemoComponent},
  {path: 'sousTache/:id/:idSousTache', component: DetailSoustacheComponent},
  {path: 'Tache/:id/:idTache', component: TacheComponent},
  {path:'stagiaireIdentite/:id'  ,component :IdentiteStagiaireComponent},
  {path: 'logout/:id', component: LogoutComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'login', component: LoginComponent},
  {path:"fichestgiaire/:id", component : FicheStgiaireComponent},
  {path:'stagiaires', component :StagiairesComponent},
  {path:'responsable',component:AccueilResponsableComponent},
  {path:'new-stgiaire', component :NewStagiaireComponent},
  {path:'encadrant/:id', component :AccueilEncadrantComponent},
  {path:'listeDespropositions/:id', component :PropositionListeStagiaireComponent},
  {path:'Creation/:id',component :CreationProjetComponent        },
  {path:'sousTacheEncadrant/:id/:idSousTache',component :DetailSoustacheEncadrantComponent},
  {path:'TacheEncadrant/:id/:idTache',component :DetailTacheEncadrantComponent},
  {path:'listeTacheEncadrant/:id',component :ListeTacheEncadrantComponent},
  {path: 'fiche-stagiaire/:idEnc/:id', component:  FicheStagiaireComponent},
  {path:'',redirectTo:'/login', pathMatch:'full'}


];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NgbModule,
 /* NbSecurityModule*/

];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [ DEFAULT_THEME, COSMIC_THEME ],
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
];


@NgModule({
  declarations: [
    AppComponent,
    AccueilStagiaireComponent,
    NewSousTacheComponent,
    NewTacheComponent,
    ListeTacheComponent,
    TestListComponent,
    AvancementComponent,
    PropositionComponent,
    ProfilStagiaireComponent,
    EchartsComponent,
    NameComponentComponent,
    DetailSoustacheComponent,
    FicheSoustacheComponent,
    LogoutComponent,
    ChatComponent,
    LoginComponent,
    NewStagiaireComponent,
    StagiairesComponent,
    FicheTacheComponent,
    DetailTacheComponent,
    ChartTacheComponent,
    FicheStgiaireComponent,
    AccueilResponsableComponent,
    AccueilEncadrantComponent,
    ListeStagiaireComponent,
    FicheStagiaireComponent,
    PropositionListComponent,
    CreationProjetComponent,
    IdentiteStagiaireComponent,
    NewTacheComponent1,
    PropositionRectification,
    ChatEncadrantComponent,
    PropositionListeStagiaireComponent,
    HeaderComponent,
    TacheComponent,
    HeaderEncadrantComponent,
    ListeTacheEncadrantComponent,
    DetailTacheEncadrantComponent,
    DetailSoustacheEncadrantComponent,
    NewEncadrantComponent,
    ProjetsComponent,
    PerformanceComponent
    /*LoginComponent,
    StagiairesComponent,
    NewStagiaireComponent*/



  ],
  entryComponents: [
    NewTacheComponent,NewTacheComponent1,PropositionRectification,ProjetsComponent,PerformanceComponent
  ],
  imports: [
    ...NB_MODULES,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    FormsModule,
    FusionChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    /*NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,*/
    /*NbSidebarModule,*/
   /* NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NgbModule.forRoot(),*/
    CalendarModule.forRoot(),
    ChartsModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    DemoModule,
    BrowserAnimationsModule, ToasterModule.forRoot()
  ],
  providers: [...NB_THEME_PROVIDERS,AutheticationService,NbSidebarService
    /*{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}*/
            ],
  bootstrap: [AppComponent],
  exports:[...NB_MODULES]
})
export class AppModule { }

