import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FacturaService } from 'src/app/services/facturacion/factura.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/Models/facturacion/Factura';

@Component({
  selector: 'app-update-factura',
  templateUrl: './update-factura.component.html',
  styles: []
})
export class UpdateFacturaComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model: Factura = {
    fact_codi: null,
    fact_tipo: null,
    sede_codi: null,
    sedeCodi: null,
    proy_codi: null,
    proyCodi: null,
    spro_codi: null,
    sproCodi: null,
    cias_codi: 1,
    ciasCodi: null,
    fact_fech: null,
    reso_codi: null,
    resoCodi: null,
    reso_pref: null,
    fact_cons: null,
    pers_auxi: null,
    fact_peri: null,
    fact_venc: null,
    fact_obse: null,
    esta_codi: "A",
    estaCodi: {
      esta_codi: null,
      esta_colo: null,
      esta_nomb: null,
      esta_tipo: null
    },
    usu_logi: null,
    temp_codi: 1,
  };
  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: FacturaService,
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
          this.route2.navigate(["facturas/view", this.model.fact_codi]);
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
