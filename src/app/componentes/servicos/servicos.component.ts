import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { GestaoComponent } from "./gestao/gestao.component";
import { RouterLink } from '@angular/router';
import { SistemasComponent } from './sistemas/sistemas.component';
import { LicencaComponent } from './licenca/licenca.component';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

}
