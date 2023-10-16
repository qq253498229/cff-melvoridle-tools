import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummoningCalculationComponent } from './summoning-calculation/summoning-calculation.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {path: 'summoning-calculation', component: SummoningCalculationComponent},
];

@NgModule({
  declarations: [
    SummoningCalculationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class ToolsModule {
}
