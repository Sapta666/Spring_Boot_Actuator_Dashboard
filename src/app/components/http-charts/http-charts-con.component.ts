import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-http-charts-con',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './http-charts-con.component.html'
})
export class HttpChartsConComponent implements OnInit {
  
  //#region Variables

    basicData: any;

    basicOptions: any;

  //#endregion

  //#region Attributes 

  @Input() pChartType: "bar" | "pie" = "bar";
//   @Input() p

  //#endregion

  //#region Page Load

  constructor() {

  }

  ngOnInit(): void {
       const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: ['rgba(255, 159, 64)', 'rgba(75, 192, 192)', 'rgba(54, 162, 235)', 'rgba(153, 102, 255)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                    borderWidth: 1
                }
            ]
        };

        this.basicOptions = {
            responsive: true,
            // width: "100%",
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            ...(this.pChartType == 'pie'
                ? {}
                : {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: textColorSecondary
                            },
                            grid: {
                                color: surfaceBorder,
                                drawBorder: false
                            }
                        },
                        x: {
                            ticks: {
                                color: textColorSecondary
                            },
                            grid: {
                                color: surfaceBorder,
                                drawBorder: false
                            }
                        }
                    }
                }
            )

        };
  }

  //#endregion
 
}
