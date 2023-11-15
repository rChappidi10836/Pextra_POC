import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PextraComponent } from './pextra.component';

describe('PextraComponent', () => {
  let component: PextraComponent;
  let fixture: ComponentFixture<PextraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PextraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PextraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
