import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { costOfFunds } from 'src/app/mockdata.ts/columnCharts';

@Component({
  selector: 'app-cost-of-funds',
  templateUrl: './cost-of-funds.component.html',
  styleUrls: ['./cost-of-funds.component.scss']
})
export class CostOfFundsComponent implements OnInit {
  lineChart: typeof Highcharts = Highcharts;
  lineChartOption: Highcharts.Options = {};
  constructor() { }

  ngOnInit(): void {
    this.lineChartOption = {
      title: {
        text: `Cost of funds for the year ${costOfFunds.time}`
    },

    subtitle: {
        // text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
      min: 0,
      max: 15,
        title: {
            text: 'Percentage ( % )'
        }
    },

    xAxis: {
       categories : costOfFunds.months,
        // accessibility: {
        //     rangeDescription: 'Range: 2010 to 2017'
        // }
    },
    credits: {
      enabled: false
    },
    tooltip:{
      useHTML: true,
      formatter: function(){
            return `
            
            <table>
              <thead>
                 <tr>
                    <th>
                     ${this.key} 
                    </th>
                 </tr>
              </thead>
            <tr> 
                <td style="color:{series.color};padding:0">${this.series.name}: </td> 
                <td style="padding:0"><b>${this.point.y}%</b></td>
           </tr>
            </table>
             `;
     },
    },

    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'bottom'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            // pointStart: 2010
        }
    },

    series: [{
        name: costOfFunds.data.actuals.name,
        type: 'line',
        data: [...costOfFunds.data.actuals.data]
    }, {
      name: costOfFunds.data.average.name,
      type: 'line',
      data: [...costOfFunds.data.average.data]
    }
  ],

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
  }

}
