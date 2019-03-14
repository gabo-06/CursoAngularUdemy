import { Injectable } from '@angular/core';

@Injectable()
export class RopasService
{
    public nombre_prenda = 'Prenda vaqueros';
    public coleccionRopa = ['Pantalones Blancos', 'Camiseta Roja'];

    prueba(nombre_prenda)
    {
        return nombre_prenda;
    }

    addRopa(nombre_prenda)
    {
        this.coleccionRopa.push(nombre_prenda);

        return this.getRopa2();
    }

    getRopa()
    {
        return this.coleccionRopa;
    }

    getRopa2()
    {
        return this.coleccionRopa;
    }

    deleteRopa(indice)
    {

    }
}