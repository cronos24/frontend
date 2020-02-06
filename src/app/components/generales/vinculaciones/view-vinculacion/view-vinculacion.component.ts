import { Component, OnInit } from "@angular/core";
import { Vinculacion } from "src/app/Models/general/Vinculacion";
import { VinculacionService } from "src/app/services/generales/vinculacion.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-vinculacion",
  templateUrl: "./view-vinculacion.component.html",
  styles: []
})
export class ViewVinculacionComponent implements OnInit {
  id: any;
  sub: any;
  model: Vinculacion = {
    vinc_codi: null,
    vinc_nomb: null,
    vinc_cons: null
  };

  constructor(
    private dataService: VinculacionService,
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
