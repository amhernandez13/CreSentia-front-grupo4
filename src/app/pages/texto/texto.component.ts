import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css',
})
export class TextoComponent {}
