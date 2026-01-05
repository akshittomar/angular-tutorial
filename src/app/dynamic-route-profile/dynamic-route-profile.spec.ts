import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRouteProfile } from './dynamic-route-profile';

describe('DynamicRouteProfile', () => {
  let component: DynamicRouteProfile;
  let fixture: ComponentFixture<DynamicRouteProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRouteProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRouteProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
