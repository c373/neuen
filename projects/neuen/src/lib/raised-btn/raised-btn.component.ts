import { Component, Input } from '@angular/core';

@Component({
  selector: 'neu-raised-btn',
  templateUrl: './raised-btn.component.html',
  styleUrls: ['./raised-btn.component.scss']
})
export class RaisedBtnComponent {
    @Input()
    public label!: string;
}
