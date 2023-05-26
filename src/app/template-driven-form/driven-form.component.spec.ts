import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenForm } from './driven-form.component';

describe('DrivenForm', () => {
  let component: DrivenForm;
  let fixture: ComponentFixture<DrivenForm>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrivenForm]
    });
    fixture = TestBed.createComponent(DrivenForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
