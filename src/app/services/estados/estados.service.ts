import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Estado } from "../../Models/general/Estado";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class EstadosService {
  constructor(private httpClient: HttpClient) {}

  //url = "http://192.168.1.208:85/api/v1/estados";
  url = environment.server_url + "General/ge-testa";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(estado: Estado) {    
    return this.httpClient.post(this.url + "/crear", estado);
  }

  public sendPutRequest(estado: Estado, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, estado);
  }
}
