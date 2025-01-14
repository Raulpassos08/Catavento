import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GestaoComponent } from './componentes/servicos/gestao/gestao.component';
import { SistemasComponent } from './componentes/servicos/sistemas/sistemas.component';
import { OutorgaComponent } from './componentes/servicos/outorga/outorga.component';
import { LicencaComponent } from './componentes/servicos/licenca/licenca.component';
import { RelatorioComponent } from './componentes/servicos/relatorio/relatorio.component';
import { ConsultoriaComponent } from './componentes/servicos/consultoria/consultoria.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { ServicosComponent } from './componentes/servicos/servicos.component';
import { ContatoComponent } from './componentes/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gestao', component: GestaoComponent },
  { path: 'sistemas', component: SistemasComponent},
  { path: 'outorga', component: OutorgaComponent},
  { path: 'licenca', component: LicencaComponent},
  { path: 'relatorio', component: RelatorioComponent},
  { path: 'consultoria', component: ConsultoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
