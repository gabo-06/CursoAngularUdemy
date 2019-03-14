import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'contacto.component.html',
    styleUrls: ['contacto.component.css']
})
export class ContactoComponent
{
    public parametro;

    constructor(private _route: ActivatedRoute,
        private _router: Router) { }

    ngOnInit()
    {
        this._route.params.forEach((params: Params) =>
        {
            this.parametro = params['page'];
        });
    }

    redirigir()
    {
        this._router.navigate(['./contacto', 'hola']);
    }
    redirigir2()
    {
        this._router.navigate(['./pagina-principal']);
    }
}