import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletestoreComponent } from './deletestore.component';

describe('DeletestoreComponent', () => {
  let component: DeletestoreComponent;
  let fixture: ComponentFixture<DeletestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
