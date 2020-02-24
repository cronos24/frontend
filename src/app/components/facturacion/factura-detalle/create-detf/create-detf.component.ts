import { Component, OnInit, ViewChild } from '@angular/core';
import { FacturaDetalleService } from 'src/app/services/facturacion/factura-detalle.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturaDetalle } from 'src/app/Models/facturacion/FacturaDetalle';

@Component({
  selector: 'app-create-detf',
  templateUrl: './create-detf.component.html',
  styles: []
})
export class CreateDetfComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model:  FacturaDetalle = {
    detf_codi: null,
    fact_codi: null,
    factCodi:null,
    prod_codi: null,
    prodCodi: null,
    detf_cant: null,
    detf_valu: null,
    detf_dcto: 0,
    detf_iva: null,
    detf_ic: null,
    detf_nota: null,
    umed_codi: null,
    umedCodi: null
  };
  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: FacturaDetalleService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private route2: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.model.fact_codi= this.id;
    });
  }

  Save(e) {
    this.model = e;
    //console.log(this.model);
    this.dataService.sendPostRequest(this.model, this.id).subscribe(
      data => {
        if (data["status"] === 1) {
          this.model = data["model"];
          this.toastr.success(
            "<i class='far fa-thumbs-up fa-2x'></i>  Registro Guardado con Exito!!!"
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
        console.log(error);
        this.toastr.error(
          " <i class='fas fa-ban fa-2x'></i> Se produjo un error en la transferencia de datos."
        );

      }
    );
  }
}
