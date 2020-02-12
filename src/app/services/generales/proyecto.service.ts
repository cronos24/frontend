import { Injectable } from '@angular/core';
import { Proyecto } from 'src/app/Models/general/Proyecto';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "General/ge-tproy";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Proyecto) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Proyecto, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
