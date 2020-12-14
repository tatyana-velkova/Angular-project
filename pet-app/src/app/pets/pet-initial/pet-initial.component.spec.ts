import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInitialComponent } from './pet-initial.component';

describe('PetInitialComponent', () => {
  let component: PetInitialComponent;
  let fixture: ComponentFixture<PetInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
