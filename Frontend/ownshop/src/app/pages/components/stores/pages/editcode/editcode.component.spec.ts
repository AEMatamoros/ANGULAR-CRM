import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcodeComponent } from './editcode.component';

describe('EditcodeComponent', () => {
  let component: EditcodeComponent;
  let fixture: ComponentFixture<EditcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
