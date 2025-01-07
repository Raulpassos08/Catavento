import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GestaoComponent } from './componentes/servicos/gestao/gestao.component';
import { SistemasComponent } from './componentes/servicos/sistemas/sistemas.component';
import { OutorgaComponent } from './componentes/servicos/outorga/outorga.component';
import path from 'path';
import { LicencaComponent } from './componentes/servicos/licenca/licenca.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gestao', component: GestaoComponent },
  { path: 'sistemas', component: SistemasComponent},
  { path: 'outorga', component: OutorgaComponent},
  { path: 'licenca', component: LicencaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
