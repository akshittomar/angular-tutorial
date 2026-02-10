import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifecycle } from './angular-lifecycle';

describe('AngularLifecycle', () => {
  let component: AngularLifecycle;
  let fixture: ComponentFixture<AngularLifecycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLifecycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLifecycle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
