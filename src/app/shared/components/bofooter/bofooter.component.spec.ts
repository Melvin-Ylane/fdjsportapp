import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BofooterComponent } from './bofooter.component';

describe('BofooterComponent', () => {
  let component: BofooterComponent;
  let fixture: ComponentFixture<BofooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BofooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BofooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
