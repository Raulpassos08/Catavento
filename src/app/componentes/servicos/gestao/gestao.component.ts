import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-gestao',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent],
  templateUrl: './gestao.component.html',
  styleUrl: './gestao.component.scss',
})
export class GestaoComponent {}
