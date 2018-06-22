import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit ,Inject} from '@angular/core';
import { Proposition } from '../../Model/Proposition';
import { PropositionServices } from '../../Services/Proposition.service';
import { ActivatedRoute } from '@angular/router';
import { PropositionComponent } from '../proposition/proposition.component';
import { StagiaireServices } from '../../Services/Stagiaire.service';
import { Stagiaire} from '../../Model/Stagiaire';

@Component({
  selector: 'app-proposition-list',
  templateUrl: './proposition-list.component.html',
  styleUrls: ['./proposition-list.component.css'] ,
  providers :[Proposition ,PropositionServices ,StagiaireServices,Stagiaire ]
})
export class PropositionListComponent implements OnInit {

  router: any;
  Proposition :Proposition ;
  Propositions :Proposition[];
  idStg  :number  ;
  prop:Proposition;

  constructor(
    private  ActivatedRoute:ActivatedRoute , public dialog: MatDialog,private  PropositionServices :PropositionServices ,public Proposition1 :Proposition ,private StagiaireServices:StagiaireServices ,public Stagiaire:Stagiaire, p : Proposition
  ) {
    this.idStg = ActivatedRoute.snapshot.params['id'];
    this.Proposition =Proposition1 ;
    this.prop = p;
  }

  ngOnInit() {
    this.GetPropositionsByStagiaires(this.idStg);

  }

  GetPropositionsByStagiaires(id:number)
  {this.PropositionServices.findByIdStagiaire(id).subscribe (
    data=>
    {
      this.Propositions=data ;
      console.log(this.Propositions);


    }

  )
  }


  getStagiaireById(id: number) {
    this.StagiaireServices.findById(id).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }


  deleate (id:number)
  {
    this.PropositionServices.deleteById(id).subscribe(


      data=>{this.ngOnInit();}

    )

  }
  update(p:Proposition)
  {
    p.validation =true ;
    this.PropositionServices.updateProposition2(p).subscribe(
      data=>{}
    )



  }


  openDialog(P:Proposition): void {

this.prop = P;
    let dialogRef = this.dialog.open(PropositionRectification, {
      width: '600px',
      data: { proposition: this.prop }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.Proposition= result;
     this.PropositionServices.updateProposition(this.Proposition.idProposition,this.Proposition).subscribe(
        data=>{
          this.Proposition= data;

        },
       error2 => {console.log(error2);}
      )




    });}












}
@Component({
  selector: 'app-NewContent',
  templateUrl: './UpdateContent.html',
  providers: []
})
export class PropositionRectification {

  constructor(public dialogRef: MatDialogRef<PropositionRectification>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)

  }

  onNoClick(): void {
    this.dialogRef.close();
  }





}
