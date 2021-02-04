import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenAutoComponent } from './template-driven-auto.component';

describe('TemplateDrivenAutoComponent', () => {
  let component: TemplateDrivenAutoComponent;
  let fixture: ComponentFixture<TemplateDrivenAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
