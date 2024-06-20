import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroulselComponent } from './caroulsel.component';

describe('CaroulselComponent', () => {
  let component: CaroulselComponent;
  let fixture: ComponentFixture<CaroulselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaroulselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaroulselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
