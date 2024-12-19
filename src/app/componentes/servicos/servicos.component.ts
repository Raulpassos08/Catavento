import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { GestaoComponent } from "./gestao/gestao.component";

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NgOptimizedImage, GestaoComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

}
