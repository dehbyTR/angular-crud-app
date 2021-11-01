import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  /**
   * função listar
   */
  public listar() {
    return this.http.get(environment.url_api + 'paises');
  }

  /**
   * criar
   */
  public criar(pais: any) {
    return this.http.post(environment.url_api + 'paises', pais);
  }

  /**
   * listarPorId
   */
  public listarPorId(id: number) {
    return this.http.get(environment.url_api + 'paises/' + id);
  }

  /**
   * atualizar
   */
  public atualizar(pais: any, id: number) {
    return this.http.put(environment.url_api + 'paises/' + id, pais);
  }

  /**
   * excluir */
  public excluir(id: number) {
    return this.http.delete(environment.url_api + 'paises/' + id);
  }
}
