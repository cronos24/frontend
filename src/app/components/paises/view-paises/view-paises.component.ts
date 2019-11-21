import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { PaisesService } from "src/app/services/paises/paises.service";
import { Pais } from "src/app/Models/general/Pais";

@Component({
  selector: "app-view-paises",
  templateUrl: "./view-paises.component.html",
  styleUrls: ["./view-paises.component.css"]
})
export class ViewPaisesComponent implements OnInit {
  id: any;
  sub: any;
  pais: Pais = {
    pais_codi: null,
    pais_isonum: null,
    pais_iso2: "",
    pais_iso3: "",
    pais_nombre: ""
  };

  constructor(
    private dataService: PaisesService,
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
      this.pais = data[0];
    });
  }
}
