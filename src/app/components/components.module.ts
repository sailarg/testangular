import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationComponent } from './information/information.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    InformationComponent,
    AnalysisComponent
  ],
  exports: [
    InformationComponent,
    AnalysisComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HighchartsChartModule
  ]
})
export class ComponentsModule { }
