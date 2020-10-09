import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WYSIWYGEditorComponent } from './wysiwygeditor.component';

describe('WYSIWYGEditorComponent', () => {
  let component: WYSIWYGEditorComponent;
  let fixture: ComponentFixture<WYSIWYGEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WYSIWYGEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WYSIWYGEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
