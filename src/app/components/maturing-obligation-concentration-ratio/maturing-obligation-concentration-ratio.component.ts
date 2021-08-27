import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ArrOfMaturingObligations, concentrationRatioInfo, FundingGap, MaturingObligation } from 'src/app/mockdata.ts/columnCharts';

@Component({
  selector: 'app-maturing-obligation-concentration-ratio',
  templateUrl: './maturing-obligation-concentration-ratio.component.html',
  styleUrls: ['./maturing-obligation-concentration-ratio.component.scss']
})
export class MaturingObligationConcentrationRatioComponent implements OnInit {
  dataForPieChart = {};
  pieChart: typeof Highcharts = Highcharts;
  pieChartOption: Highcharts.Options = {};
  
  negativeChart: typeof Highcharts = Highcharts;
  negativeColumnChartOptions: Highcharts.Options;
  arrOfMO: MaturingObligation[] = ArrOfMaturingObligations;
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    concentrationRatioInfo.calculatePercentages();
    const { liabilitesInPercentage, top15CustomersInPercentage } = concentrationRatioInfo;
    this.dataForPieChart = {liabilitesInPercentage, top15CustomersInPercentage};
    // console.log(this.dataForPieChart);
    const categories = Object.keys(FundingGap).map(elem => this.datePipe.transform(elem, 'dd MMMM YY'));
    const data = Object.values(FundingGap);

    this.pieChartOption = {
      chart: {
        plotBackgroundColor: '#ffff',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Concentration ratio of Top 15 Customers vs Top deposit liabilities for January 2021',
        verticalAlign: "top",
        align: 'center',
        style: {
          fontFamily: 'Nexa Bold',
          fontSize: '15px',
          fontWeight: 'bold',
          color: '#2D0C52'
        }
    },
  
    credits:{
      enabled: false,
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            showInLegend: true
        }
    },
    series: [{
        name: '',
        type: 'pie',
        colorByPoint: true,
        data: [{
            name: 'Top Deposit liabilities of Bank',
            color: '#9792E3',
            y: (this.dataForPieChart as any).liabilitesInPercentage,
            sliced: true,
            selected: true
        }, {
            name: 'Top Liabilites Volume of 15 Customers',
            color:'#3D315B',
            y: (this.dataForPieChart as any).top15CustomersInPercentage
        }, 
        ]
    }]
    }

     this.negativeChart.setOptions({
       lang: {
         numericSymbols: ["k", "M", "B", "T", "P", "E"]
       }
     })

    this.negativeColumnChartOptions = {
      chart: {
          type: 'column'
      },
    

      title: {
          text: 'Net Funding Gap in Millions for Week 23',
          style: {
            fontFamily: 'Nexa Bold',
            fontSize: '18px',
            color: '#2D0C52'
          }
      },
      xAxis: {
          categories,
          
         
      },
      yAxis: {
        max: 5000000000,
        min: -250000000,
        title: {
          text: 'Net Value in (Millions)',
        
      },
        labels: {
          step: -1,
        }
      },
      credits: {
          enabled: false
      },
      series: [
        {
          name: 'Net Funding Gap',
          type: 'column',
          color: '#3D315B',
          data,
          tooltip: {
            
            pointFormatter : function(){
                  const numberFormat: unknown = {
                    notation: "compact",
                    compactDisplay: "long"
                  }
                      return `
                      <table>
                      <tr>
                          <td style="color:{series.color};padding:0">${this.series.name}: </td> 
                          <td style="padding:0"><b>${new Intl.NumberFormat('en', numberFormat).format(this.y)}</b></td>
                     </tr>
                      </table>
                       `;
                }
          }
       }, 
    ]
     }
  }


  formatNumber(money: number, aCurrency: string): string{
    // this.arrOfMO[0].currency, this.arrOfMO[0].totalVolumeFromPortfolio
   return new Intl.NumberFormat('en-US',
   { style: 'currency', currency: aCurrency == 'N'? 'NGN' : 'USD' }).format(money); 
  }
    
}
