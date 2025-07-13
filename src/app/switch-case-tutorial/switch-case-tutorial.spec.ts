import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseTutorial } from './switch-case-tutorial';

describe('SwitchCaseTutorial', () => {
  let component: SwitchCaseTutorial;
  let fixture: ComponentFixture<SwitchCaseTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCaseTutorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCaseTutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
