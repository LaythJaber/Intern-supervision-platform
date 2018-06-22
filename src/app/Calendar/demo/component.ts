import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {Reunion} from "../../../Model/Reunion";
import {ReunionServices} from "../../../Services/Reunion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Stagiaire} from "../../../Model/Stagiaire";

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
 /* moduleId: app.module,*/
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles.css'],
  templateUrl: 'template.html',
  providers : [ReunionServices,Reunion,Stagiaire]
})
export class DemoComponent implements OnInit{
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
Reunions = [];
CalendarEvents =[];

view: string = 'month';
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];
  events: CalendarEvent[] = this.CalendarEvents;


  activeDayIsOpen: boolean = true;

  refresh: Subject<any> = new Subject();
  ngOnInit() {
    this.getAllReunion();



  }
 idEnc :number;
idStg :number;
  stg : Stagiaire;
reunion : Reunion;
EncMode : boolean = false;
  constructor(private modal: NgbModal,private reunionService : ReunionServices, reunion : Reunion,activatedRoute : ActivatedRoute,stagiaire :Stagiaire, private router: Router) {
     if( activatedRoute.snapshot.params['idEnc'] !=null) {
       this.idEnc = activatedRoute.snapshot.params['idEnc'];
       this.EncMode = true ;
     }
    this.idStg= activatedRoute.snapshot.params['id'];
    this.stg=stagiaire;
    this.stg.idPersonne=this.idStg;





    this.reunion=reunion;
    this.reunion.stagiaireReunion=this.stg;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'Demande Reunion',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });

    this.reunion.objet="Demande Reunion";

    this.reunionService.saveReunion(this.reunion).subscribe(
      data2 => {
        this.reunion = data2;
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }

    );

    this.refresh.next();
  }




  getAllReunion() {
    this.reunionService.findAllReunionsStgEnc(this.idStg).subscribe(
      data => {
        this.Reunions = data;
/*
        this.CalendarEvents = this.Reunions.map(o => {
          return {
            start;: subDays(startOfDay(o.date), 1),
            end: addDays(o.date, 1),
            title: o.objet+o.salle,
            color: colors.red,
            actions: this.actions}
        });
*/
      },
      err => {
        console.log(err);
      }
    );
  }

  confirmer(event,r: Reunion)
  {
    event.target.disabled= true ;
    this.reunionService.updateReunion(r).subscribe(
      data => {
        r = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  refuser(event,r: Reunion)
  {
    event.target.disabled= true ;
    this.reunionService.deleteById(r.idReunion).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  homeEnc()
  {this.router.navigateByUrl("/fiche-stagiaire/" + this.idEnc+"/"+this.idStg);
  }

  homeStg()
  {this.router.navigateByUrl("/accueilStagiaire/"+this.idStg);
  }


}
/*[
   {
     start: subDays(startOfDay(new Date()), 1),
     end: addDays(new Date(), 1),
     title: 'A 3 day event',
     color: colors.red,
     actions: this.actions
   },
   {
     start: startOfDay(new Date()),
     title: 'An event with no end date',
     color: colors.yellow,
     actions: this.actions
   },
   {
     start: subDays(endOfMonth(new Date()), 3),
     end: addDays(endOfMonth(new Date()), 3),
     title: 'A long event that spans 2 months',
     color: colors.blue
   },
   {
     start: addHours(startOfDay(new Date()), 2),
     end: new Date(),
     title: 'A draggable and resizable event',
     color: colors.yellow,
     actions: this.actions,
     resizable: {
       beforeStart: true,
       afterEnd: true
     },
     draggable: true
   }
 ];*/
