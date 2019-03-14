import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    templateUrl: 'empleado.component.html',
    styleUrls: ['empleado.component.css']
})
export class EmpleadoComponent
{
    public empleado: Empleado = new Empleado();

    constructor()
    {
        this.empleado.hijos = []
    }
}