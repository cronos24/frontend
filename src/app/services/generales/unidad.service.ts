import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Unidad } from 'src/app/Models/general/Unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "General/ge-tumed";

  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Unidad) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Unidad, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
