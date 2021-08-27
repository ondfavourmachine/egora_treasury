import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VarianceComponent } from '../../components/variance/variance.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { GeneralChartsComponent } from 'src/app/components/general-charts/general-charts.component';
import { HighchartsChartModule } from 'highcharts-angular';
// import { YieldOnAssetsComponent } from './components/yield-on-assets/yield-on-assets.component';
import { MaturingObligationConcentrationRatioComponent } from 'src/app/components/maturing-obligation-concentration-ratio/maturing-obligation-concentration-ratio.component';
import { YieldOnAssetsComponent } from 'src/app/components/yield-on-assets/yield-on-assets.component';
import { BaselImgsComponent } from 'src/app/components/basel-imgs/basel-imgs.component';


const routes: Routes = [
  {path: '', 
  component: DashboardComponent,
  children: [
    { path: '', redirectTo: 'general', pathMatch: 'full'},
    {path: 'variance-analysis', component: VarianceComponent},
    {path: 'general', component: GeneralChartsComponent},
    {path: 'mOCR', component: MaturingObligationConcentrationRatioComponent},
    {path: 'yield-on-assets', component: YieldOnAssetsComponent}
  ]
},
 
 
]



@NgModule({
  declarations: [
    DashboardComponent,
    VarianceComponent,
    GeneralChartsComponent,
    BaselImgsComponent,
    YieldOnAssetsComponent,
    MaturingObligationConcentrationRatioComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    RouterModule.forChild(routes)
  ],
 
})
export class DashboardModule { }
