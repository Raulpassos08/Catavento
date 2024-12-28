import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GestaoComponent } from './componentes/servicos/gestao/gestao.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gestao', component: GestaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
