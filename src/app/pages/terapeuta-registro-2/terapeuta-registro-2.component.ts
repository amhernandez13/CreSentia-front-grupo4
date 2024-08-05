import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { read } from 'fs';

@Component({
  selector: 'app-terapeuta-registro-2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './terapeuta-registro-2.component.html',
  styleUrl: './terapeuta-registro-2.component.css'
})
export class TerapeutaRegistro2Component {
  constructor(){}


  
  ngOnInit(){
  }

  url: string = "../../../assets/img/profileIcon.jpg";

  onselectFile(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input && input.files && input.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(input.files[0]);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.url = (e.target as FileReader).result as string;
      };
    }
  }
}