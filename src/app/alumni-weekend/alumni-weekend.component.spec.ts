import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniWeekendComponent } from './alumni-weekend.component';

describe('AlumniWeekendComponent', () => {
  let component: AlumniWeekendComponent;
  let fixture: ComponentFixture<AlumniWeekendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniWeekendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
