import { Component, OnInit, Inject } from '@angular/core';
import { ICalculateIntegralResult } from 'src/app/core/interfaces/calculate-integral-result.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-integral-result-dialog',
  templateUrl: './integral-result-dialog.component.html',
  styleUrls: ['./integral-result-dialog.component.scss']
})
export class IntegralResultDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<IntegralResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICalculateIntegralResult) { }

  public displayedColumns: string[];

  public ngOnInit(): void {
    this.displayedColumns = ['position', 'x', 'result'];
    console.log(this.data);
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
