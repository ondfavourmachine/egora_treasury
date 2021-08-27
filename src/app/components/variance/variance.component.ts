import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { allFromMock, FixedIncomeData, ForexandDerivatives, MoneyMarket, myChart, testColumn } from 'src/app/mockdata.ts/columnCharts';

interface ChartsToDisplay { columnChart: typeof Highcharts, columnChartOption: Highcharts.Options, name: string }

@Component({
  selector: 'app-variance',
  templateUrl: './variance.component.html',
  styleUrls: ['./variance.component.scss']
})
export class VarianceComponent implements OnInit, AfterViewInit {
 @ViewChildren(HighchartsChartComponent) hC: QueryList<HighchartsChartComponent>
  chartObject: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  areaChart:typeof Highcharts = Highcharts;
  areaChartOptions: Highcharts.Options = {}

  pieCharts: typeof Highcharts = Highcharts;
  pieChartOptions: Highcharts.Options = {};

  columnChart: typeof Highcharts = Highcharts;
  columnChartsOptions: Highcharts.Options = {};

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
    this.chartOptions = this.generateLineCharts();
    this.areaChartOptions = this.generateAreaCharts();
    this.pieChartOptions = this.generatePieChartOptions();
    this.columnChartsOptions = this.generateColumnChartsOptions();
  }

  ngAfterViewInit(){
//    const res =  this.generateArrOfFixedIncomeTypes();
//    console.log(res);
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

  generateAllColumnOptions(typeOfChart: string,yAxisString: string, yAxis:Highcharts.YAxisOptions, title: Highcharts.TitleOptions, series: Highcharts.SeriesOptionsType[]){
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
      tooltip: {
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

  


  generateLineCharts(){
    const options: Highcharts.Options = {
 
     title: {
         text: 'Solar Employment Growth by Sector, 2010-2016',
         style:{
            fontFamily: 'Nexa Bold',
            color: '#2D0C52'
         }
     },

     yAxis: {
         title: {
             text: 'Number of Employees'
         }
     },
 
     xAxis: {
         accessibility: {
             rangeDescription: 'Range: 2010 to 2017'
         }
     },
     credits: {
       enabled: false
   },
 
     legend: {
         layout: 'horizontal',
         align: 'center',
         verticalAlign: 'bottom'
     },
 
     plotOptions: {
         series: {
             label: {
                 connectorAllowed: false
             },
             pointStart: 2010
         }
     },
 
     series: [{
         name: 'Installation',
         type: 'line',
         data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
     }, {
         name: 'Manufacturing',
         type: 'line',
         data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
     }, {
         name: 'Sales & Distribution',
         type: 'line',
         data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
     }, {
         name: 'Project Development',
         type: 'line',
         data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
     }, {
         name: 'Other',
         type: 'line',
         data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
     }],
 
     responsive: {
         rules: [{
             condition: {
                 maxWidth: 500
             },
             chartOptions: {
                 legend: {
                     layout: 'horizontal',
                     align: 'center',
                     verticalAlign: 'bottom'
                 }
             }
         }]
     }
 
     
 
    
   }
     return options;
 }
 
 generateAreaCharts(){
   const options: Highcharts.Options = {
     chart: {
         type: 'area'
     },
     accessibility: {
         description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
     },
     title: {
         text: 'US and USSR nuclear stockpiles',
         style:{
            fontFamily: 'Nexa Bold',
            color: '#2D0C52'
         }
     },
     credits: {
       enabled: false
   },
     subtitle: {
         text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
             'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
             'armscontrol.org</a>'
     },
     xAxis: {
         allowDecimals: false,
         labels: {
             formatter: function () {
                 return this.value as string; // clean, unformatted number for year
             }
         },
         accessibility: {
             rangeDescription: 'Range: 1940 to 2017.'
         }
     },
     yAxis: {
         title: {
             text: 'Nuclear weapon states'
         },
         labels: {
             formatter: function () {
                  const value = 1500;
                 return value / 1000 + 'k';
             }
         }
     },
     tooltip: {
         pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
     },
     plotOptions: {
         area: {
             pointStart: 1940,
             marker: {
                 enabled: false,
                 symbol: 'circle',
                 radius: 2,
                 states: {
                     hover: {
                         enabled: true
                     }
                 }
             }
         }
     },
     series: [{
         name: 'USA',
         type: 'area',
         data: [
             null, null, null, null, null, 6, 11, 32, 110, 235,
             369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
             20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
             26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
             24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
             21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
             10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
             5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
         ]
     }, {
         name: 'USSR/Russia',
         type: 'area',
         data: [null, null, null, null, null, null, null, null, null, null,
             5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
             1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
             11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
             30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
             37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
             21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
             12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
         ]
     }]
 }
 
 return options;
 }
 
 generatePieChartOptions(){
     const options: Highcharts.Options = {
         chart: {
             plotBackgroundColor: null,
             plotBorderWidth: null,
             plotShadow: false,
             type: 'pie'
         },
         title: {
             text: 'Browser market shares in January, 2018',
             style: {
                fontFamily: 'Nexa Bold',
                color: '#2D0C52'
             }
         },
         tooltip: {
             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         },
         accessibility: {
             point: {
                 valueSuffix: '%'
             }
         },
         credits: {
             enabled: false
         },
         plotOptions: {
             pie: {
                 allowPointSelect: true,
                 cursor: 'pointer',
                 dataLabels: {
                     enabled: true,
                     format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                 }
             }
         },
         series: [{
             name: 'Brands',
             colorByPoint: true,
             type: 'pie',
             data: [{
                 name: 'Chrome',
                 y: 61.41,
                 sliced: true,
                 selected: true
             }, 
             {
                 name: 'Internet Explorer',
                 y: 29.84
             }, 
          
            ]
         }]
     };
 
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



 changeColumnToPie(event: Event, chartOptions: string){
     console.log((event.target as HTMLSelectElement).value);
    const cOptions: Highcharts.Options = this[chartOptions];
    
   const arrOfPercentages = (cOptions.series[1] as Highcharts.SeriesColumnOptions).data.map((elem, index) => {
        const percentage = ((elem as number) / ((cOptions.series[0] as Highcharts.SeriesColumnOptions).data[index] as number)) * 100;
        return  parseFloat(percentage.toFixed(1));
    });

    const arrOfBudget = new Array(arrOfPercentages.length).fill(100);
    console.log(testColumn);
    const aTest = {...testColumn};
    (aTest.series[0] as Highcharts.SeriesColumnOptions).data = arrOfBudget;
    (aTest.series[1] as Highcharts.SeriesColumnOptions).data = arrOfPercentages;
    aTest.series[0].name = "Budget";
    aTest.series[1].name = 'Actual';  
   (aTest.series[1] as unknown as Highcharts.PointOptionsObject).dataLabels = {
    enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}%', // one decimal
            y: 20, // 10 pixels down from the top,
            // padding: 10,
            // backgroundColor: 'black',
            style: {
                fontSize: '18px',
                color: 'black',
                fontFamily: 'Nexa Bold',
            }
};
console.log(aTest);
    this[chartOptions] = {...aTest};  
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
