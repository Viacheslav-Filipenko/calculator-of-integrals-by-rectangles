import { NgModule } from '@angular/core';

import { MaterialComponentsModule } from './material-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [MaterialComponentsModule, ReactiveFormsModule],
    exports: [MaterialComponentsModule, ReactiveFormsModule]
})
export class SharedModule { }
