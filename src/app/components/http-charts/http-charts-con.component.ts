import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { BreakpointsEnum } from '../../common/enums/breakpoints.enum';
import { ActuatorService } from '../../common/services/actuator.service';

@Component({
    selector: 'app-http-charts-con',
    standalone: true,
    imports: [ChartModule],
    templateUrl: './http-charts-con.component.html'
})
export class HttpChartsConComponent implements OnInit {

    //#region Variables

    protected data: any = null;

    protected chartType: "bar" | "pie" = "bar";

    protected basicData: any;
    protected basicOptions: any;

    //#endregion

    //#region Attributes 

    @Input() set pChartType(value: "bar" | "pie") {
        this.chartType = value ?? "bar";

        this.setChartData();
        this.setChartOptions();
    }
    @Input() set pData(value: any) {
        this.data = value;

        this.setChartData();
        this.setChartOptions();
    }

    //#endregion

    //#region Page Load

    constructor() {

    }

    ngOnInit(): void {

    }

    //#endregion

    //#region Private Functions

    private setChartData(): void {
        this.basicData = {
            labels: this.chartType == "bar"
                ? ["GET", "POST", "PUT", "DELETE"]
                : ['200', '400', '404', '500'],
            datasets: [
                {
                    label: this.chartType == "bar"
                        ? "Request Type Count: "
                        : "Response Status Count: ",
                    data: this.chartType == "bar"
                        ? [
                            this.data?.filter(item => item?.request?.method == "GET")?.length ?? 0,
                            this.data?.filter(item => item?.request?.method == "POST")?.length ?? 0,
                            this.data?.filter(item => item?.request?.method == "PUT")?.length ?? 0,
                            this.data?.filter(item => item?.request?.method == "DELETE")?.length ?? 0,
                        ]
                        : [
                            this.data?.filter(item => item?.response?.status == 200)?.length ?? 0,
                            this.data?.filter(item => item?.response?.status == 400)?.length ?? 0,
                            this.data?.filter(item => item?.response?.status == 404)?.length ?? 0,
                            this.data?.filter(item => item?.response?.status == 500)?.length ?? 0,
                        ],
                    backgroundColor: ['rgba(255, 159, 64)', 'rgba(75, 192, 192)', 'rgba(54, 162, 235)', 'rgba(153, 102, 255)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                    borderWidth: 1
                }
            ]
        };
    }

    private setChartOptions(): void {
        console.log([ this.data?.filter(item => item?.request?.method == "GET")?.length ?? 0,
                            this.data?.filter(item => item?.request?.method == "POST")?.length ?? 0,
                            this.data?.filter(item => item?.request?.method == "PUT")?.length ?? 0,
                            this.data?.filter(item => item?.request?.method == "DELETE")?.length ?? 0,])

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicOptions = {
            responsive: true,
            // width: "100%",
            aspectRatio: window.innerWidth <= BreakpointsEnum.lg ? 2.2 : 2,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                    },
                    display: this.chartType == "pie"
                },
                title: {
                    display: true,
                    text: this.chartType == 'pie'
                        ? "Last 100 HTTP Status"
                        : "Last 100 HTTP Request Method",
                    font: {
                        size: "24"
                    }
                },
            },
            ...(this.chartType == 'pie'
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
                    },

                }
            ),

        };
    }

    //#endregion

}
