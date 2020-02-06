import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Obligacion } from '../Models/general/Obligacion';

@Injectable({
  providedIn: 'root'
})
export class ObligacionService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "General/ge-tobli";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Obligacion) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Obligacion, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
