import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatepreviewComponent } from './templatepreview.component';

describe('TemplatepreviewComponent', () => {
  let component: TemplatepreviewComponent;
  let fixture: ComponentFixture<TemplatepreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatepreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
