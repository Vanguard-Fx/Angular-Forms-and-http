import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAutoComponent } from './reactive-auto.component';

describe('ReactiveAutoComponent', () => {
  let component: ReactiveAutoComponent;
  let fixture: ComponentFixture<ReactiveAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
