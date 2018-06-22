import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [MatProgressBarModule,MatIconModule,MatToolbarModule,MatButtonModule,MatExpansionModule,MatInputModule,MatCardModule,MatButtonToggleModule,MatSliderModule,MatDialogModule],
  exports: [MatProgressBarModule,MatIconModule,MatToolbarModule,MatButtonModule,MatExpansionModule,MatInputModule,MatCardModule,MatButtonToggleModule,MatSliderModule,MatDialogModule],
})
export class MaterialModule { }

