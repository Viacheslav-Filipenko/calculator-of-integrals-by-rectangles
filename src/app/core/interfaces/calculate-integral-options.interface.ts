import { RECTANGLES_METHODS } from '../enum/rectangles-methods.enum';

export interface ICalculateIntegralOptions {
    equalution: string;
    from: number;
    to: number;
    intervals: number;
    roundingAccuracy: number;
    method: RECTANGLES_METHODS;
}