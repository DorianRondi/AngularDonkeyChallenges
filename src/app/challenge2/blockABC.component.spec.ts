import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockABCComponent } from './blockABC.component';

describe('BlockABCComponent', () => {
  let component: BlockABCComponent;
  let fixture: ComponentFixture<BlockABCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockABCComponent]
    });
    fixture = TestBed.createComponent(BlockABCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
