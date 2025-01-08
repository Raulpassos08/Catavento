import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { BotaoComponent } from '../../contato/botao/botao.component';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent,BotaoComponent],
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.scss'
})
export class RelatorioComponent {

}
