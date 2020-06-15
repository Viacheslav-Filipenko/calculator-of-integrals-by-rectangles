import { ITableItem } from './table-item.interface';

export interface ICalculateIntegralResult {
    sum: number;
    table: Array<ITableItem>;
    equalution: string;
    step: number;
    roundingAccuracy: number;
    from: number;
    intervals: number;
    to: number;
}