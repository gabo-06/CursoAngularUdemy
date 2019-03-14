import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators'; // Librería para mapear la respuesta http
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService
{
    public url: string;

    constructor(private _http: Http)
    {
        this.url = "http://jsonplaceholder.typicode.com/posts";
    }

    getPrueba()
    {
        return "Hola mundo desde el serivicio";
    }

    getArticulos(): any
    {
        return this._http.get(this.url)
            .pipe(map(res =>
                res.json()
            ));
    }

    
}