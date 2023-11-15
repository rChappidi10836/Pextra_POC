import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainTextComponent } from './rain-text.component';

describe('RainTextComponent', () => {
  let component: RainTextComponent;
  let fixture: ComponentFixture<RainTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
