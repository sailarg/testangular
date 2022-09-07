import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { InformationComponent } from './components/information/information.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/información-elemento',
    pathMatch: 'full',
  },
  {
    path: 'información-elemento', component: InformationComponent
  },
  {
    path: 'análisis-grafico', component: AnalysisComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
