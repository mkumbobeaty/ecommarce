import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommarceHomeComponent } from './ecommarce-home.component';

describe('EcommarceHomeComponent', () => {
  let component: EcommarceHomeComponent;
  let fixture: ComponentFixture<EcommarceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommarceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommarceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
