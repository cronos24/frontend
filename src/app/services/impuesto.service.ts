import { Impuesto } from "src/app/Models/general/Impuesto";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImpuestoService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "General/ge-timpu";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Impuesto) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Impuesto, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
