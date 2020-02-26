import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturaMovimientoService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "Facturacion/fc-tmfac";

  public sendGetRequest(id) {
    return this.httpClient.get(this.url+ "/index?id=" + id);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }
 
}
