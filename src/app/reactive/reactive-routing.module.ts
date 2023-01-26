import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "reactivebasicos", component: BasicosComponent},
      { path: "reactivedinamicos", component: DinamicosComponent},
      { path: "reactiveswitches", component: SwitchesComponent},
      { path: "**", redirectTo: 'reactivebasicos', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
