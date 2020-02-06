import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Entidad } from 'src/app/Models/general/Entidad';

@Injectable({
  providedIn: "root"
})
export class EntidadService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "General/ge-tenad";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Entidad) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Entidad, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
