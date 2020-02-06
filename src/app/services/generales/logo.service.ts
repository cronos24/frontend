import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Logo } from 'src/app/Models/general/Logo';

@Injectable({
  providedIn: "root"
})
export class LogoService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "General/ge-tlogo";

  public sendGetRequest(id) {
    return this.httpClient.get(this.url+ "/index?id=" + id);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Logo, id) {
    return this.httpClient.post(this.url + "/crear?id=" + id, model);
  }

  public sendPutRequest(model: Logo, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
