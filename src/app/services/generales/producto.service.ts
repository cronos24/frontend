import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/Models/general/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "General/ge-tprod";

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

  public sendPostRequest(model: Producto) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Producto, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
