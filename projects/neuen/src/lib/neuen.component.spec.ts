import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuenComponent } from './neuen.component';

describe('NeuenComponent', () => {
  let component: NeuenComponent;
  let fixture: ComponentFixture<NeuenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
