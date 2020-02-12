import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FacturaDetalle } from 'src/app/Models/facturacion/FacturaDetalle';

@Injectable({
  providedIn: 'root'
})
export class FacturaDetalleService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "Facturacion/fc-tdetf";

  public sendGetRequest(id) {
    return this.httpClient.get(this.url+ "/index?id=" + id);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: FacturaDetalle, id) {
    return this.httpClient.post(this.url + "/crear?id=" + id, model);
  }

  public sendPutRequest(model: FacturaDetalle, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
