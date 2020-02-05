import { Component, OnInit, ViewChild } from '@angular/core';
import { TerceroVinculacion } from 'src/app/Models/general/TerceroVinculacion';
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { TercerosVinculacionesService } from 'src/app/services/terceros-vinculaciones.service';

@Component({
  selector: 'app-update-vipe',
  templateUrl: './update-vipe.component.html',
  styles: []
})
export class UpdateVipeComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model:  TerceroVinculacion = {
    vipe_codi: null,
    vinc_codi: null,
    pers_auxi: null,
    vincCodi : {
      vinc_codi: null,
      vinc_nomb: null,
      vinc_cons: null,
    },    
  };

  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: TercerosVinculacionesService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private route2: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.Edit(this.id);
    });
  }

  Edit(id) {
    this.dataService.sendShowRequest(id).subscribe(data => {
      //console.log(data);
      this.model = data[0];
    });
  }
  Save(e) {
    this.model = e;

    this.dataService.sendPutRequest(this.model, this.id).subscribe(
      data => {
        if (data["status"] === 1) {
          // console.log(data);
          this.toastr.success(
            "<i class='far fa-thumbs-up fa-2x'></i>  Registro Modificado con Exito!!!"
          );
          this.route2.navigate(["terceros/view", this.model.pers_auxi]);
        } else {
          this.toastr.error(
            " <i class='fas fa-ban fa-2x'></i> El formulario tiene algunos errores."
          );
          this.validationErrors = data["errors"];
          this.status = data["status"];
        }
      },
      error => {
        this.toastr.error(
          " <i class='fas fa-ban fa-2x'></i> Se produjo un error intente nuevamente."
        );
        console.log(error);
      }
    );
  }
}
