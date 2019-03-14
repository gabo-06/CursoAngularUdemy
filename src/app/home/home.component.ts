import { Component } from '@angular/core';
import { RopasService } from '../services/ropa.service';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    providers: [RopasService]
})
export class HomeComponent
{
    public listado_ropa: Array<string>;
    public prenda_a_guardar: string;
    public fecha;
    public nombre = 'JUAN LOPEZ MARTINEZ';

    constructor(private _ropaService: RopasService)
    {
        this.fecha = new Date(2017, 4, 15);
        this.listado_ropa = this._ropaService.getRopa()
        console.log(this.listado_ropa);
    }

    ngOnInit()
    {

    }

    guardarPrenda()
    {
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }

    eliminarPrenda(index: number)
    {
        this._ropaService.deleteRopa(index);
        alert(index);
    }
}