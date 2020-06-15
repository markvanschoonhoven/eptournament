import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionNewComponent } from './division-new.component';

describe('DivisionNewComponent', () => {
  let component: DivisionNewComponent;
  let fixture: ComponentFixture<DivisionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
