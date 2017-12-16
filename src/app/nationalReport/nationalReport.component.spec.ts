import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatabletabComponent } from './datatabletab.component';

describe('DatatabletabComponent', () => {
  let component: DatatabletabComponent;
  let fixture: ComponentFixture<DatatabletabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatabletabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatabletabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
