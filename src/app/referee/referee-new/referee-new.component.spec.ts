import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeNewComponent } from './referee-new.component';

describe('RefereeNewComponent', () => {
  let component: RefereeNewComponent;
  let fixture: ComponentFixture<RefereeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
