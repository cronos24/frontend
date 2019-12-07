import { Tercero } from "./../Models/general/Tercero";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class TercerosService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "General/ge-tpers";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Tercero) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Tercero, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
