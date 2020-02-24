import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FacturaPago } from 'src/app/Models/facturacion/FacturaPago';

@Injectable({
  providedIn: 'root'
})
export class FacturaPagoService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "Facturacion/fc-tfpag";

  public sendGetRequest(id) {
    return this.httpClient.get(this.url+ "/index?id=" + id);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: FacturaPago, id) {
    return this.httpClient.post(this.url + "/crear?id=" + id, model);
  }

  public sendPutRequest(model: FacturaPago, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
