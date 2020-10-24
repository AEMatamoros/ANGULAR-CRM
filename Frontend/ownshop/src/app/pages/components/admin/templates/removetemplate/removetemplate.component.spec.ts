import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovetemplateComponent } from './removetemplate.component';

describe('RemovetemplateComponent', () => {
  let component: RemovetemplateComponent;
  let fixture: ComponentFixture<RemovetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovetemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
