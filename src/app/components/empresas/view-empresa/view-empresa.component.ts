import { Component, OnInit } from "@angular/core";
import { EmpresaService } from "src/app/services/empresa.service";
import { ActivatedRoute } from "@angular/router";
import { Empresa } from "src/app/Models/general/Empresa";

@Component({
  selector: "app-view-empresa",
  templateUrl: "./view-empresa.component.html",
  styles: []
})
export class ViewEmpresaComponent implements OnInit {
  id: any;
  sub: any;
  model: Empresa = {
    cias_codi: null,
    cias_nit: null,
    cias_dive: null,
    cias_rsoc: "",
    cias_dire: "",
    cias_tels: null,
    cias_celu: null,
    cias_mail: "",
    cias_web: "",
    cias_slog: "",
    cias_regi: "",
    cias_notf: "",
    cias_tipo: "",
    esta_codi: "",
    estaCodi: {
      esta_nomb:""
    }
  };

  constructor(
    private dataService: EmpresaService,
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
