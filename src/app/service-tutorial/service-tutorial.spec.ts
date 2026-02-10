import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTutorial } from './service-tutorial';

describe('ServiceTutorial', () => {
  let component: ServiceTutorial;
  let fixture: ComponentFixture<ServiceTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTutorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
