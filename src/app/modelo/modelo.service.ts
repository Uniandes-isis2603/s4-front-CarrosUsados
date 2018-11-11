import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


import { Modelo } from './modelo'
import { Automovil } from '../automovil/automovil';
import { HttpClient } from '@angular/common/http';

//const API_URL = "../../assets/";
//const modelos = '/modelos.json';

const API_URL = "http://localhost:8080/s4_CarrosUsados-api/api"
//const marcas = '/marcas.json';
const modelos = '/modelos';
const automoviles = '/automoviles';

@Injectable({
    providedIn: 'root'
})
export class ModeloService {

    /**
     * El constructor del servicio
     * @param http Necesario para hacer peticiones
     */
    constructor(private http: HttpClient) { }

    getModelos(): Observable<Modelo[]> {
        return this.http.get<Modelo[]>(API_URL + modelos);
    }

    getModelo(modeloId): Observable<Modelo> {
        return this.http.get<Modelo>(API_URL + modelos + '/' + modeloId);
    }

    getAutomovilesOfModelo(modeloId): Observable<Automovil[]> {
        return this.http.get<Automovil[]>(API_URL + modelos + '/' + modeloId + automoviles);
    }

    createModelo(modelo): Observable<boolean> {
        return this.http.post<boolean>(API_URL + modelos, modelo);
    }

    private handleError(error: any) {
        return throwError(error.error.errorMessage);
    }

}
