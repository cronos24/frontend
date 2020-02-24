import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Operacion } from 'src/app/Models/facturacion/Operacion';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "Facturacion/fc-toper";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Operacion) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Operacion, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
