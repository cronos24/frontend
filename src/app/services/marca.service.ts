import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Marca } from '../Models/general/Marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "General/ge-tmarc";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Marca) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Marca, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
