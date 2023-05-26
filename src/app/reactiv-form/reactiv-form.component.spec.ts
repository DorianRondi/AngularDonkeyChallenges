import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivForm } from './reactiv-form.component';

describe('ReactivForm', () => {
  let component: ReactivForm;
  let fixture: ComponentFixture<ReactivForm>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivForm]
    });
    fixture = TestBed.createComponent(ReactivForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
