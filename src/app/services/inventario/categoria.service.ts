import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from 'src/app/Models/inventario/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "Inventario/iv-tcate";

  public sendGetRequest() {
    //console.log(this.url);
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Categoria) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Categoria, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
