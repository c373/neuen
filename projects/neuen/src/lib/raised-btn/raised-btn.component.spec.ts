import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisedBtnComponent } from './raised-btn.component';

describe('RaisedBtnComponent', () => {
  let component: RaisedBtnComponent;
  let fixture: ComponentFixture<RaisedBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisedBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
