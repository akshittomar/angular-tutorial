import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRouteHome } from './dynamic-route-home';

describe('DynamicRouteHome', () => {
  let component: DynamicRouteHome;
  let fixture: ComponentFixture<DynamicRouteHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRouteHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRouteHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
