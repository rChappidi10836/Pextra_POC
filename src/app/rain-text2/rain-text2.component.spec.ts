import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainText2Component } from './rain-text2.component';

describe('RainText2Component', () => {
  let component: RainText2Component;
  let fixture: ComponentFixture<RainText2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainText2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainText2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
