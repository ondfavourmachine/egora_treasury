import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { allFromMock, customTooltip, FixedIncomeData, ForexandDerivatives, MoneyMarket, myChart, testColumn, TotalFixedIncome, TotalForexAndDerivatives, TotalMoneyMarket } from 'src/app/mockdata.ts/columnCharts';

interface ChartsToDisplay { columnChart: typeof Highcharts, columnChartOption: Highcharts.Options, name: string }

@Component({
  selector: 'app-variance',
  templateUrl: './variance.component.html',
  styleUrls: ['./variance.component.scss']
})
export class VarianceComponent implements OnInit {
 @ViewChildren(HighchartsChartComponent) hC: QueryList<HighchartsChartComponent>
  chartObject: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  areaChart:typeof Highcharts = Highcharts;
  areaChartOptions: Highcharts.Options = {}

  pieCharts: typeof Highcharts = Highcharts;
  pieChartOptions: Highcharts.Options = {};

  columnChart: typeof Highcharts = Highcharts;
//   Totals
  columnChartsOptionsForTF: Highcharts.Options = {};
  columnChartsOptionsForTFD: Highcharts.Options = {};
  columnChartsOptionsForMoneyMarket: Highcharts.Options = {};

  columnPromissoryChart: typeof Highcharts = Highcharts;
  ArrayOfFixedIncomeCharts: ChartsToDisplay[] = [];
  ArrayOfForexandDerivatives: ChartsToDisplay[] = [];
  ArrayOfMoneyMarket: ChartsToDisplay[] = [];
  columnPromissoryChartOptions: Highcharts.Options = {};
  updateFlag: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.ArrayOfFixedIncomeCharts = this.generateArrOfVarianceAnalysisCharts(FixedIncomeData);
    this.ArrayOfForexandDerivatives = this.generateArrOfVarianceAnalysisCharts(ForexandDerivatives);
    this.ArrayOfMoneyMarket = this.generateArrOfVarianceAnalysisCharts(MoneyMarket);
    // console.log(this.ArrayOfMoneyMarket);
    // this.chartOptions = this.generateLineCharts();
    // this.areaChartOptions = this.generateAreaCharts();
    // this.pieChartOptions = this.generatePieChartOptions();
    this.columnChartsOptionsForTF = this.generateAllColumnOptions(
        TotalFixedIncome.chartName, 
        TotalFixedIncome.yAxisInfo.title.text, 
        TotalFixedIncome.yAxisInfo,
        TotalFixedIncome.title,
         [
             {name: 'Budget', color: TotalFixedIncome.colorSelection[0], type: 'column',  data: TotalFixedIncome.data.map(elem => elem.budget)},
             {name: 'Actual', color: TotalFixedIncome.colorSelection[1], type: 'column',  data: TotalFixedIncome.data.map(elem => elem.actual)},
         ], 
         customTooltip()
         );
        
    this.columnChartsOptionsForTFD = this.generateAllColumnOptions(
        TotalForexAndDerivatives.chartName, 
        TotalForexAndDerivatives.yAxisInfo.title.text, 
        TotalForexAndDerivatives.yAxisInfo,
        TotalForexAndDerivatives.title,
         [
             {name: 'Budget', color: TotalForexAndDerivatives.colorSelection[0], type: 'column',  data: TotalForexAndDerivatives.data.map(elem => elem.budget)},
             {name: 'Actual', color: TotalForexAndDerivatives.colorSelection[1], type: 'column',  data: TotalForexAndDerivatives.data.map(elem => elem.actual)},
         ], 
         customTooltip()
         );

    this.columnChartsOptionsForMoneyMarket = this.generateAllColumnOptions(
        TotalMoneyMarket.chartName, 
        TotalMoneyMarket.yAxisInfo.title.text, 
        TotalMoneyMarket.yAxisInfo,
        TotalMoneyMarket.title,
         [
             {name: 'Budget', color: TotalMoneyMarket.colorSelection[0], type: 'column',  data: TotalMoneyMarket.data.map(elem => elem.budget)},
             {name: 'Actual', color: TotalMoneyMarket.colorSelection[1], type: 'column',  data: TotalMoneyMarket.data.map(elem => elem.actual)},
         ], 
         customTooltip()
         );
  }


 generateArrOfVarianceAnalysisCharts(objectToSearch:Record<string, any>): Array<ChartsToDisplay>{
  let options: Highcharts.Options;
  let arr: {columnChart: any, columnChartOption: Highcharts.Options, name: string}[] = []
  for (let elem in objectToSearch){
    options = this.generateAllColumnOptions(
        objectToSearch[elem].chartName,
        objectToSearch[elem].yAxisInfo.title.text,
        objectToSearch[elem].yAxisInfo,
        objectToSearch[elem].title,
        [
         {
          name: 'Budget',
          color: objectToSearch[elem].colorSelection[0],
          type: 'column',
          data: objectToSearch[elem].data.map(elem => elem.budget)
         },
         {
          name: 'Actual',
          color: objectToSearch[elem].colorSelection[1],
          type: 'column',
          data: objectToSearch[elem].data.map(elem => elem.actual)
         }
        ],
        
      )
      options.chart.backgroundColor = '#FAF9F9';
      options.chart.borderRadius = 10;
    arr.push({columnChart: Highcharts, columnChartOption: options, name: (objectToSearch[elem] as myChart).name})
  }
  return arr;
 }

  generateAllColumnOptions(
      typeOfChart: string,
      yAxisString: string, 
      yAxis:Highcharts.YAxisOptions, 
      title: Highcharts.TitleOptions, 
      series: Highcharts.SeriesOptionsType[],
      customTooltip?: Highcharts.TooltipOptions){
    const options: Highcharts.Options = {
      chart: {
          type: typeOfChart
      },
      credits:{
          enabled: false,
      },
      title: {
          text: title.text,
          style:{
            fontFamily: 'Nexa Bold',
            color: '#2D0C52'
         }
      },
      xAxis: {
          categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
          ],
          crosshair: true
      },
      yAxis: {
          min: yAxis.min,
          max: yAxis.max,
          title: {
              text: yAxis.title.text
          }
      },
      tooltip: customTooltip ? customTooltip : {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.2f} Million</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          formatter: function(){
              const numberFormat: unknown = {
                notation: "compact",
                compactDisplay: "long"
              }
              const strToDisplay = this.points.map((elem) => {
                  const figureInString = new Intl.NumberFormat('en', numberFormat).format(elem.point.y);
                  return `
                  <table>
                  <tr>
                      <td style="color:{series.color};padding:0">${elem.series.name}: </td> 
                      <td style="padding:0"><b>${figureInString}</b></td>
                 </tr>
                  </table>
                   `
              }).join(' ')
              return strToDisplay;
          },
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 10,
              borderWidth: 1,
              pointWidth: 10,
            //   groupPadding: 10,
          }
      },
      series: [
      ...series
     ]
    }

    return options
  }


 generateColumnChartsOptions(){
     const options: Highcharts.Options = {
         chart: {
             type: 'column'
         },
         credits:{
             enabled: false,
         },
         title: {
             text: 'Total Monthly Volume for Fixed Income',
             style:{
                fontFamily: 'Nexa Bold',
                color: '#2D0C52'
             }
         },
         subtitle: {
             text: 'Source: WorldClimate.com'
         },
         xAxis: {
             categories: [
                 'Jan',
                 'Feb',
                 'Mar',
                 'Apr',
                 'May',
                 'Jun',
                 'Jul',
                 'Aug',
                 'Sep',
                 'Oct',
                 'Nov',
                 'Dec'
             ],
             crosshair: true
         },
         
         yAxis: {
             min: 0,
             max: 2000,
             title: {
                 text: 'Naira (Billions)'
             },

             
            
            //  stackLabels: {
            //    enabled: true,
              
            //    format: `<span style="font-size:10px">200</span>`,
            //    useHTML: true,
              
            //  }
         },
        
         tooltip: {
             headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
             pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                 '<td style="padding:0"><b>{point.y:.2f} Million</b></td></tr>',
             footerFormat: '</table>',
             shared: true,
             formatter: function(){
                 const strToDisplay = this.points.map((elem) => {
                     const figureInString = new Intl.NumberFormat('en').format(elem.point.y/ 1000);
                     return `
                     <table>
                     <tr>
                         <td style="color:{series.color};padding:0">${elem.series.name}: </td> 
                         <td style="padding:0"><b>${figureInString}  Billion</b></td>
                    </tr>
                     </table>
                      `
                 }).join(' ')
                 return strToDisplay;
             },
             useHTML: true
         },
         plotOptions: {
            // series: {
            //     borderWidth: 0,
            //     dataLabels: {
            //         enabled: true,
            //         format: '{point.y:.1f}%',
            //         verticalAlign: 'middle'
            //     }
            // },
             column: {
                 pointPadding: 0.2,
                 borderWidth: 0,
                 pointWidth: 10,
                
                
             }
         },
         series: [
         {
             name: 'Budget',
             color: "orange",
             type:"column",
             
             data: [1755.01, 603.55, 610.54, 448.95, 862.46,  795.12, 692.15, 758.91, 1122.92, 1203.06, 1415.78, 1526.74]
     
         }, {
             name: 'Actual',
             color: 'green',
             type:"column",
             data: [1655.19, 377.87, 454.38, 332.66, 759.66, 679.69, 659.62, 729.65, 1109.62, 1200.13, 1375.45, 1466.70]
     
         }, 
      
     ]
     }
 
     return options;
 }


 changeColumnToPercentage(event: Event, index: number, AChart:ChartsToDisplay, whereToLookIn: string){
    const typeofChartWanted = (event.target as HTMLSelectElement).value;
    const objectToLookIn = allFromMock[whereToLookIn];
    switch(typeofChartWanted){
        case 'Percentages':          
            this.updateToPercentage(AChart, objectToLookIn);
        break;
        case 'Figures':
            const arrayName = whereToLookIn == 'FixedIncomeData' ? 'ArrayOfFixedIncomeCharts' : whereToLookIn == 'ForexandDerivatives' ? 'ArrayOfForexandDerivatives' : 'ArrayOfMoneyMarket';
            this.updateToFigure(AChart, index, objectToLookIn, arrayName);
        break;
    }

 }

 updateToPercentage(chart: ChartsToDisplay, typeOfMockToLookIn: Record<string, any>){
    const aName = chart.name;
    const ChartFound = typeOfMockToLookIn[aName] as myChart;
    const data  = ChartFound.aDDpercentageCalc().map(elem => parseFloat(elem.toFixed(2)));
    const newChartForDisplay = {...chart};
    (newChartForDisplay.columnChartOption.series[0] as Highcharts.SeriesColumnOptions).data = new Array(12).fill(100);
    (newChartForDisplay.columnChartOption.series[1] as Highcharts.SeriesColumnOptions).data = data;
    const plotOptions = testColumn.plotOptions;
    const yAxis = testColumn.yAxis;
    newChartForDisplay.columnChartOption.plotOptions = {...plotOptions};
    newChartForDisplay.columnChartOption.yAxis = {...yAxis};
    newChartForDisplay.columnChartOption.series[0].color = chart.columnChartOption.series[0].color;
    newChartForDisplay.columnChartOption.series[1].color = chart.columnChartOption.series[1].color;
    newChartForDisplay.columnChartOption.series[1].opacity = 0.7;
    (newChartForDisplay.columnChartOption.series[1] as Highcharts.SeriesColumnOptions).dataLabels = {
        enabled: true,
                rotation: -90,
                inside: false,
                color: '#FFFFFF',
                align: 'right',
                overflow: 'allow',
                format: '{point.y:.1f}%', // one decimal
                y: 5, // 10 pixels down from the top,
                // padding: 10,
                // backgroundColor: 'black',
                style: {
                    fontSize: '18px',
                    color: 'black',
                    fontFamily: 'Nexa Bold',

                }
    };
    chart.columnChartOption = newChartForDisplay.columnChartOption;
    this.updateFlag = true;
 }

 updateToFigure(chart: ChartsToDisplay, index: number, typeOfMockToLookIn: Record<string, any>, arrayInThisCompToUse: string){
    const filtered = this.hC.find(elem => elem.options.title.text == chart.columnChartOption.title.text);
    filtered.ngOnDestroy();
    const oldChart = this[arrayInThisCompToUse][index] as ChartsToDisplay;
    const newChart = typeOfMockToLookIn[oldChart.name] as myChart;
    const newoptions = this.generateAllColumnOptions(
        newChart.chartName,
        newChart.yAxisInfo.title.text,
        newChart.yAxisInfo,
        newChart.title,
        [
         {
          name: 'Budget',
          color: newChart.colorSelection[0],
          type: 'column',
          data: newChart.data.map(elem => elem.budget)
         },
         {
          name: 'Actual',
          color: newChart.colorSelection[1],
          type: 'column',
          data: newChart.data.map(elem => elem.actual)
         }
        ],
        
      )

     const chartToBeInserted: ChartsToDisplay = {name: newChart.name, columnChart: Highcharts, columnChartOption: newoptions};
     this[arrayInThisCompToUse].splice(index, 1, chartToBeInserted);
 }
 

}
