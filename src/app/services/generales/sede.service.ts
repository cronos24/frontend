import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Sede } from 'src/app/Models/general/Sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  constructor(private httpClient: HttpClient) {}

  url = environment.server_url + "General/ge-tsede";

  public sendGetRequest() {
       return this.httpClient.get(this.url);
  }

  public sendShowRequest(id) {
    return this.httpClient.get(this.url + "/view?id=" + id);
  }

  public sendDeleteRequest(id) {
    return this.httpClient.delete(this.url + "/borrar?id=" + id);
  }

  public sendPostRequest(model: Sede) {
    return this.httpClient.post(this.url + "/crear", model);
  }

  public sendPutRequest(model: Sede, id) {
    return this.httpClient.put(this.url + "/editar?id=" + id, model);
  }
}
