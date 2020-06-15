import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { RECTANGLES_METHODS } from 'src/app/core/enum/rectangles-methods.enum';
import { IntegralSolverService } from 'src/app/core/services/integral-solver.service';

import { IntegralResultDialogComponent } from './components/integral-result-dialog/integral-result-dialog.component';

const RECTANGLES_METHODS_DATA = [
  {
    title: 'Left rectangles method',
    value: RECTANGLES_METHODS.left
  },
  {
    title: 'Right rectangles method',
    value: RECTANGLES_METHODS.rigth
  },
  {
    title: 'Center rectangles method',
    value: RECTANGLES_METHODS.center
  }
]

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public integralCalculatorForm: FormGroup;
  public rectanglesMethods: Array<any>;

  constructor(private formBuilder: FormBuilder, private integralSolverService: IntegralSolverService, public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.initForm();

    this.rectanglesMethods = RECTANGLES_METHODS_DATA;
  }

  public submit() {
    if (this.integralCalculatorForm.invalid) {
      this.integralCalculatorForm.markAsUntouched();
    } else {
      const data = this.calculateIntegral();
      this.dialog.open(IntegralResultDialogComponent, { width: '700px', data });
    }
  }

  private initForm(): void {
    this.integralCalculatorForm = this.formBuilder.group({
      equalution: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      intervals: [10, [Validators.required]],
      roundingAccuracy: [3, [Validators.required]],
      method: ['', [Validators.required]],
    });
  }

  private calculateIntegral() {
    const { equalution, method } = this.integralCalculatorForm.value;

    const to = parseInt(this.integralCalculatorForm.value.to);
    const from = parseInt(this.integralCalculatorForm.value.from);
    const intervals = parseInt(this.integralCalculatorForm.value.intervals);
    const roundingAccuracy = parseInt(this.integralCalculatorForm.value.roundingAccuracy);

    return this.integralSolverService.calculateByRectangles({ equalution, method, to, from, intervals, roundingAccuracy })

  }
}
