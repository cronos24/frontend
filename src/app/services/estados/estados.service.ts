import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Estado } from "../../Models/general/Estado";

@Injectable({
  providedIn: "root"
})
export class EstadosService {
  constructor(private httpClient: HttpClient) {}

  url = "http://192.168.1.208:85/api/v1/estados";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/" + id);
  }

  public sendPostRequest(estado: Estado) {
    return this.httpClient.post(this.url, estado);
  }

  public sendPutRequest(estado: Estado, id) {
    return this.httpClient.put(this.url + "/" + id, estado);
  }
}
