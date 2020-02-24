import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Documento } from 'src/app/Models/facturacion/Documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "Facturacion/fc-tdocu";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Documento) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Documento, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
