import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTutorial } from './signal-tutorial';

describe('SignalTutorial', () => {
  let component: SignalTutorial;
  let fixture: ComponentFixture<SignalTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalTutorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalTutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
