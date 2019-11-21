import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EstadosService } from "src/app/services/estados/estados.service";
import { Estado } from "src/app/Models/general/Estado";

@Component({
  selector: "app-view-estados",
  templateUrl: "./view-estados.component.html",
  styleUrls: ["./view-estados.component.css"]
})
export class ViewEstadosComponent implements OnInit {
  id: any;
  sub: any;
  estado: Estado = {
    esta_code: 0,
    esta_nomb: "",
    esta_codi: "",
    esta_tipo: "",
    esta_colo: ""
  };

  constructor(
    private dataService: EstadosService,
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
      this.estado = data[0];
    });
  }
}
