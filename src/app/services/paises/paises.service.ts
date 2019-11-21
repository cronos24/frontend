import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pais } from "../../Models/general/Pais";

@Injectable({
  providedIn: "root"
})
export class PaisesService {
  constructor(private httpClient: HttpClient) {}

  url = "http://192.168.1.208:85/api/v1/paises";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/" + id);
  }

  public sendPostRequest(estado: Pais) {
    return this.httpClient.post(this.url, estado);
  }

  public sendPutRequest(estado: Pais, id) {
    return this.httpClient.put(this.url + "/" + id, estado);
  }
}
