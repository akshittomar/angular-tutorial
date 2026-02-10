import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMethods } from './api-methods';

describe('ApiMethods', () => {
  let component: ApiMethods;
  let fixture: ComponentFixture<ApiMethods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiMethods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMethods);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
