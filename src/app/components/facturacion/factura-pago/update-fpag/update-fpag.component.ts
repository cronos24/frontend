import { Component, OnInit, ViewChild } from '@angular/core';
import { FacturaPagoService } from 'src/app/services/facturacion/factura-pago.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturaPago } from 'src/app/Models/facturacion/FacturaPago';

@Component({
  selector: 'app-update-fpag',
  templateUrl: './update-fpag.component.html',
  styles: []
})
export class UpdateFpagComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model:  FacturaPago = {
    fpag_codi: null,
    fact_codi: null,
    factCodi:null,
    mpag_codi: null,
    mpagCodi: null,
    metp_codi: null,
    metpCodi: null,
    esta_codi:null,
    estaCodi: {
      esta_codi:null,
      esta_colo:null,
      esta_tipo:null,
      esta_nomb:null,
    },
    usua_codi:1,
    fpag_fven:null,
    fpag_freg:null,
    fpag_fpag:null,
    fpag_nref:null,
    fpag_valo:null
  };

  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: FacturaPagoService,
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
