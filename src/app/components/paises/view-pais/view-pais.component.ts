import { Component, OnInit } from "@angular/core";
import { Pais } from "src/app/Models/general/Pais";
import { PaisService } from "src/app/services/pais.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-pais",
  templateUrl: "./view-pais.component.html",
  styles: []
})
export class ViewPaisComponent implements OnInit {
  id: any;
  sub: any;
  model: Pais = {
    pais_codi: null,
    pais_nombre: null,
    pais_iso2: null,
    pais_iso3: null,
    pais_isonum: null
  };

  constructor(
    private dataService: PaisService,
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
      //console.log(data);
      this.model = data[0];
    });
  }
}
