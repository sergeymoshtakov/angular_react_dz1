import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsDestinationsComponent } from './deals-destinations.component';

describe('DealsDestinationsComponent', () => {
  let component: DealsDestinationsComponent;
  let fixture: ComponentFixture<DealsDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealsDestinationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DealsDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
