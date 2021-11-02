import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {

  constructor(private http: HttpClient) { }

  /**
   * listar
   */
  public listar() {
    return this.http.get(environment.url_api + 'universidades');
  }

  /**
   * criar
   */
  public criar(pais: any) {
    return this.http.post(environment.url_api + 'universidades', pais);
  }

  /**
   * listarPorId
   */
  public listarPorId(id: number) {
    return this.http.get(environment.url_api + 'universidades/' + id);
  }

  /**
   * atualizar
   */
  public atualizar(pais: any, id: number) {
    return this.http.put(environment.url_api + 'universidades/' + id, pais);
  }

  /**
   * excluir
   */
  public excluir(id: number) {
    return this.http.delete(environment.url_api + 'universidades/' + id);
  }
}
