import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStyleTutorial } from './app-style-tutorial';

describe('AppStyleTutorial', () => {
  let component: AppStyleTutorial;
  let fixture: ComponentFixture<AppStyleTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStyleTutorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppStyleTutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
