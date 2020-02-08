export class ChartViewModel {
  chartData: Array<any>;
  chartLabels: Array<any>;
  chartOptions: any;
  chartDownloadOptions: any;
  chartLegend: any;
  chartType: string;
  chartColors: Array<any>;
  chartDownloadColors: Array<any>;
  constructor(_chartData: any[],
              _chartLabels: any[],
              _chartType?: string,
              _chartOptions?: any,
              _chartLegend?: any,
              _chartColors?: any[]) {
    this.chartData = _chartData;
    this.chartLabels = _chartLabels;
    this.chartType = _chartType;
    this.chartOptions = _chartOptions;
    this.chartLegend = _chartLegend;
    this.chartColors = _chartColors;
  }
}
