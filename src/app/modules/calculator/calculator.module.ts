import { NgModule } from '@angular/core';
import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { IntegralResultDialogComponent } from './components/integral-result-dialog/integral-result-dialog.component';

@NgModule({
    declarations: [CalculatorComponent, IntegralResultDialogComponent],
    imports: [CommonModule, CalculatorRoutingModule, SharedModule]
})
export class CalculatorModule { }
