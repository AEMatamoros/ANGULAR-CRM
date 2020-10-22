import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewtemplateComponent } from './addnewtemplate.component';

describe('AddnewtemplateComponent', () => {
  let component: AddnewtemplateComponent;
  let fixture: ComponentFixture<AddnewtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
