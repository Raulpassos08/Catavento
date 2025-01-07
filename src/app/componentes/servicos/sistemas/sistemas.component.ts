import { Component } from '@angular/core';
import { BotaoComponent } from '../../contato/botao/botao.component';
import { HeaderComponent } from '../../header/header.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sistemas',
  standalone: true,
  imports: [BotaoComponent, HeaderComponent, NgOptimizedImage],
  templateUrl: './sistemas.component.html',
  styleUrl: './sistemas.component.scss'
})
export class SistemasComponent {

}
