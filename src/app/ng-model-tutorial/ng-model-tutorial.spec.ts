import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelTutorial } from './ng-model-tutorial';

describe('NgModelTutorial', () => {
  let component: NgModelTutorial;
  let fixture: ComponentFixture<NgModelTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModelTutorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelTutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
