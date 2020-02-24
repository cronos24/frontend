import { Component, OnInit } from "@angular/core";
import { Entidad } from "src/app/Models/general/Entidad";
import { EntidadService } from "src/app/services/generales/entidad.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-entidad",
  templateUrl: "./view-entidad.component.html",
  styles: []
})
export class ViewEntidadComponent implements OnInit {
  id: any;
  sub: any;
  model: Entidad = {
    enad_codi: null,
    enad_nomb: "",
    esta_codi: "A",
    estaCodi: {
      esta_codi: null,
      esta_nomb: null,
      esta_tipo: null,
      esta_colo: null
    }
  };

  constructor(
    private dataService: EntidadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.view(this.id);
    });
  }

  view(id) {
    this.dataService.sendShowRequest(id).subscribe(data => {
      this.model = data[0];
    });
  }
}
