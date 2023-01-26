import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "templatebasicos", component: BasicosComponent},
      { path: "templatedinamicos", component: DinamicosComponent},
      { path: "templatedirectives", component: DirectivesComponent},
      { path: "templateswitches", component: SwitchesComponent},
      { path: "**", redirectTo: 'templatebasicos', pathMatch:'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
