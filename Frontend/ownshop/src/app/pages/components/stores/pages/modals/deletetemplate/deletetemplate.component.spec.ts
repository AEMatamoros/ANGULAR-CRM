import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetemplateComponent } from './deletetemplate.component';

describe('DeletetemplateComponent', () => {
  let component: DeletetemplateComponent;
  let fixture: ComponentFixture<DeletetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
