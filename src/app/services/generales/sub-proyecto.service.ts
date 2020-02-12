import { Injectable } from '@angular/core';
import { SubProyecto } from 'src/app/Models/general/SubProyecto';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubProyectoService {

  constructor(private httpClient: HttpClient) { }

  url = environment.server_url + "General/ge-tspro";

  public sendGetRequest(id) {
    return this.httpClient.get(this.url+ "/index?id=" + id);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: SubProyecto, id) {
    return this.httpClient.post(this.url + "/crear?id=" + id, model);
  }

  public sendPutRequest(model: SubProyecto, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
