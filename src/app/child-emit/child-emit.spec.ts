import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmit } from './child-emit';

describe('ChildEmit', () => {
  let component: ChildEmit;
  let fixture: ComponentFixture<ChildEmit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildEmit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildEmit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
