import { Component, OnInit } from "@angular/core";
import { Ocupacion } from "src/app/Models/general/Ocupacion";
import { OcupacionService } from "src/app/services/ocupacion.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-ocupacion",
  templateUrl: "./view-ocupacion.component.html",
  styles: []
})
export class ViewOcupacionComponent implements OnInit {
  id: any;
  sub: any;
  model: Ocupacion = {
    ocup_codi: null,
    ocup_nomb: null
  };

  constructor(
    private dataService: OcupacionService,
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
