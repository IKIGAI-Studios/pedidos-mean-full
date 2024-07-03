import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  // Propiedades
  baseURL : string = 'https://pedidos-mean-back.onrender.com/api/pedidos'
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')


  constructor(private http:HttpClient) { }

  // Agregar empleado
  nuevoPedido(data): Observable<any> {
    let url = `${this.baseURL}/` //? juhmmm los dejamos asi?

    return this.http.post(url, data)
      .pipe(catchError(this.errorManager))
  }

  // Obtener empleados
  getPedidos() {
    let url = `${this.baseURL}/`
    return this.http.get(url)
  }

  getPedido(id): Observable<any> {
    let url = `${this.baseURL}/${id}`
    
    return this.http.get(url, { headers: this.headers })
      .pipe(map((res:Response) => {
        return res || {};
      }),
      catchError(this.errorManager))
  }

  // Actualizar empleado
  actualizarPedido(id, data): Observable<any> {
    let url = `${this.baseURL}/${id}`

    return this.http.put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorManager))
  }

  // Eliminar empleado
  eliminarPedido(id): Observable<any> {
    let url = `${this.baseURL}/${id}`

    return this.http.delete(url, { headers: this.headers })
      .pipe(catchError(this.errorManager))
  }

  // Manejador de errores
  errorManager(error: HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = error.error.message
    } 
    else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`

    }
    console.log(errorMessage)
    return throwError(() => errorMessage)
  }
}
