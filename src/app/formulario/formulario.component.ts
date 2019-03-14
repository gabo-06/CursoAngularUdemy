import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public alumno: any  = {};

  constructor() { 
    this.alumno.nombre = '';
    this.alumno.apellido = '';    
  }

  ngOnInit() {

  }
  }