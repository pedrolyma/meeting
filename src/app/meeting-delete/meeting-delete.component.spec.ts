import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDeleteComponent } from './meeting-delete.component';

describe('MeetingDeleteComponent', () => {
  let component: MeetingDeleteComponent;
  let fixture: ComponentFixture<MeetingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
