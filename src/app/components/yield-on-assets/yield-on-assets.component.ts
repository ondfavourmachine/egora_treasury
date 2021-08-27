import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { yieldOnAssets } from 'src/app/mockdata.ts/columnCharts';

@Component({
  selector: 'app-yield-on-assets',
  templateUrl: './yield-on-assets.component.html',
  styleUrls: ['./yield-on-assets.component.scss']
})
export class YieldOnAssetsComponent implements OnInit {
  lineChart: typeof Highcharts = Highcharts;
  lineChartOption: Highcharts.Options = {};
  constructor() { }

  ngOnInit(): void {
    this.lineChartOption = {
      title: {
        text: 'Yield on Assets for the year 2019'
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
       categories : yieldOnAssets.months,
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
        name: yieldOnAssets.data.actuals.name,
        type: 'line',
        data: [...yieldOnAssets.data.actuals.data]
    }, {
      name: yieldOnAssets.data.average.name,
      type: 'line',
      data: [...yieldOnAssets.data.average.data]
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
