import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseTutorial } from './if-else-tutorial';

describe('IfElseTutorial', () => {
  let component: IfElseTutorial;
  let fixture: ComponentFixture<IfElseTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseTutorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseTutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
