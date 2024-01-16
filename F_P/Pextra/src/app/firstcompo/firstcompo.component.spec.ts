import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcompoComponent } from './firstcompo.component';

describe('FirstcompoComponent', () => {
  let component: FirstcompoComponent;
  let fixture: ComponentFixture<FirstcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
