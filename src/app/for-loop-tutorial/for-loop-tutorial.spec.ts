import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopTutorial } from './for-loop-tutorial';

describe('ForLoopTutorial', () => {
  let component: ForLoopTutorial;
  let fixture: ComponentFixture<ForLoopTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForLoopTutorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForLoopTutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
