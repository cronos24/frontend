import { Component, OnInit } from "@angular/core";
import { LogoService } from "src/app/services/logo.service";
import { ActivatedRoute } from "@angular/router";
import { Logo } from "src/app/Models/general/Logo";

@Component({
  selector: "app-view-logo",
  templateUrl: "./view-logo.component.html",
  styles: []
})
export class ViewLogoComponent implements OnInit {
  id: any;
  sub: any;
  model: Logo = {
    logo_codi: null,
    cias_codi: null,
    logo_tipo: null,
    logo_imag: null,
    logo_alto: null,
    logo_anch: null,
    esta_codi: null
  };

  constructor(
    private dataService: LogoService,
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
