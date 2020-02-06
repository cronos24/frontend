import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Grupo } from 'src/app/Models/inventario/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "Inventario/iv-tgrup";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Grupo) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Grupo, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
