import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMobileComponent } from './layout-mobile.component';

describe('LayoutMobileComponent', () => {
  let component: LayoutMobileComponent;
  let fixture: ComponentFixture<LayoutMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
