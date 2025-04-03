import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Articulo {
  id: number;
  titulo: string;
  cuerpo: string;
  fecha: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  private jsonUrl = 'assets/data/articulos.json';

  constructor(private http: HttpClient) {}

  obtenerArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.jsonUrl);
  }

  getArticulosHome(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.jsonUrl).pipe(
      map(
        (articulos) =>
          articulos
            .sort(
              (a, b) =>
                new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
            ) // orden descendente
            .slice(0, 3) // tomar los 3 primeros
      )
    );
  }
}
