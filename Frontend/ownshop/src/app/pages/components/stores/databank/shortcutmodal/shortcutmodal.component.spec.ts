import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutmodalComponent } from './shortcutmodal.component';

describe('ShortcutmodalComponent', () => {
  let component: ShortcutmodalComponent;
  let fixture: ComponentFixture<ShortcutmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
