import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableDecleration } from './variable-decleration';

describe('VariableDecleration', () => {
  let component: VariableDecleration;
  let fixture: ComponentFixture<VariableDecleration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariableDecleration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableDecleration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
