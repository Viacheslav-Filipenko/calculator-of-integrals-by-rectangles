import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralResultDialogComponent } from './integral-result-dialog.component';

describe('IntegralResultDialogComponent', () => {
  let component: IntegralResultDialogComponent;
  let fixture: ComponentFixture<IntegralResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegralResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
