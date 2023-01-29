import { NgModule } from '@angular/core';
import { NeuenComponent } from './neuen.component';
import { RaisedBtnComponent } from './raised-btn/raised-btn.component';



@NgModule({
  declarations: [
    NeuenComponent,
    RaisedBtnComponent
  ],
  imports: [
  ],
  exports: [
    NeuenComponent
  ]
})
export class NeuenModule { }
