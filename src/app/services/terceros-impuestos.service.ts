import { Injectable } from '@angular/core';
import { TerceroImpuesto } from "../Models/general/TerceroImpuesto";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TercerosImpuestosService {

  constructor(private httpClient: HttpClient) { }

  url = environment.server_url + "General/ge-tpetr";

  public sendGetRequest(id) {
    return this.httpClient.get(this.url+ "/index?id=" + id);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: TerceroImpuesto, id) {
    return this.httpClient.post(this.url + "/crear?id=" + id, model);
  }

  public sendPutRequest(model: TerceroImpuesto, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
