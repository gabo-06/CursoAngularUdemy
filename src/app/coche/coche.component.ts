import { Component } from '@angular/core'
import { Coche } from './coche'
import { debug } from 'util';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    templateUrl: './coche.component.html',
    providers: [PeticionesService]
})
export class CocheComponent
{
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;

    constructor(private _peticionesService: PeticionesService)
    {
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche('Seat Panda', '120', 'Blanco'),
            new Coche('Renault clio', '110', 'Azul')
        ]
    }

    ngOnInit()
    {
        this._peticionesService.getArticulos()
            .subscribe(
                res => 
                {
                    this.articulos = res;

                    if (!this.articulos) {
                        console.log("Error en el servidor");
                    } 
                },
                err =>
                {
                    let errorMessage = <any>err;
                    console.log(err)
                }
            );
    }

    onSubmit(formCoche)
    {
        this.coches.push(this.coche);
        this.coche = new Coche("", "", "");
    }

}