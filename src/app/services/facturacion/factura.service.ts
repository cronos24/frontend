import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Factura } from 'src/app/Models/facturacion/Factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "Facturacion/fc-tfact";

  public sendGetRequest() {
    console.log(this.url);
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Factura) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Factura, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
