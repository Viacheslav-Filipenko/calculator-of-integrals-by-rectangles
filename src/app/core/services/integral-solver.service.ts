import { Injectable } from '@angular/core';
import * as mathjs from 'mathjs';

import { ICalculateIntegralOptions } from '../interfaces/calculate-integral-options.interface';
import { RECTANGLES_METHODS } from '../enum/rectangles-methods.enum';
import { ICalculateIntegralResult } from '../interfaces/calculate-integral-result.interface';
import { withAccuracy } from '../utils/with-accuracy.util';

@Injectable({
    providedIn: 'root'
})
export class IntegralSolverService {
    public calculateByRectangles(options: ICalculateIntegralOptions): ICalculateIntegralResult {
        switch (options.method) {
            // case RECTANGLES_METHODS.center:
            //     return this.calculateByCenterRectangles(options);
            case RECTANGLES_METHODS.rigth:
                return this.calculateByRightRectangles(options);
            default:
                return this.calculateByLeftRectangles(options);
        }
    }

    public calculateByLeftRectangles({ to, from, intervals, roundingAccuracy, equalution }: ICalculateIntegralOptions): ICalculateIntegralResult {
        let sum = 0;
        const table = [];
        const step = mathjs.divide(mathjs.subtract(to, from), intervals) as number;

        for (let x = from; x < to; x = withAccuracy((mathjs.add(x, step) as number), roundingAccuracy)) {
            const functionResult = mathjs.evaluate(equalution, { x });
            const functionResultWithRoundingAccuracy = withAccuracy(functionResult, roundingAccuracy);

            sum = mathjs.add(sum, functionResultWithRoundingAccuracy) as number;
            table.push({ x, result: functionResultWithRoundingAccuracy });
        }

        const sumWithRoundingAccuracy = withAccuracy(sum, roundingAccuracy);

        return { sum: sumWithRoundingAccuracy, equalution, from, to, roundingAccuracy, step, table, intervals };
    }

    public calculateByRightRectangles({ to, from, intervals, roundingAccuracy, equalution }: ICalculateIntegralOptions): ICalculateIntegralResult {
        let sum = 0;
        const table = [];
        const step = mathjs.divide(mathjs.subtract(to, from), intervals) as number;


        for (let x = withAccuracy((mathjs.add(from, step) as number), roundingAccuracy); x <= to; x = withAccuracy((mathjs.add(x, step) as number), roundingAccuracy)) {
            const functionResult = mathjs.evaluate(equalution, { x });
            const functionResultWithRoundingAccuracy = withAccuracy(functionResult, roundingAccuracy);

            sum = mathjs.add(sum, functionResultWithRoundingAccuracy) as number;
            table.push({ x, result: functionResultWithRoundingAccuracy });
        }

        const sumWithRoundingAccuracy = withAccuracy(sum, roundingAccuracy);

        return { sum: sumWithRoundingAccuracy, equalution, from, to, roundingAccuracy, step, table, intervals };
    }

    // public calculateByCenterRectangles(options: ICalculateIntegralOptions): ICalculateIntegralResult {
    //     let sum = 0;
    // }
}