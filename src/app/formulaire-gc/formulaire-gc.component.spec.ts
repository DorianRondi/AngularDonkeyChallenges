import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireGC } from './formulaire-gc.component';

describe('FormulaireGC', () => {
  let component: FormulaireGC;
  let fixture: ComponentFixture<FormulaireGC>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireGC]
    });
    fixture = TestBed.createComponent(FormulaireGC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
