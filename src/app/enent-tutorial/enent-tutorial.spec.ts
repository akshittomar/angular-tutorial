import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnentTutorial } from './enent-tutorial';

describe('EnentTutorial', () => {
  let component: EnentTutorial;
  let fixture: ComponentFixture<EnentTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnentTutorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnentTutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
