import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/Models/facturacion/Factura';
import { FacturaService } from 'src/app/services/facturacion/factura.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-factura',
  templateUrl: './create-factura.component.html',
  styles: []
})
export class CreateFacturaComponent implements OnInit {
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
    persAuxi: null,
    usu_logi: null,
    temp_codi: 1,
    oper_codi: 5,
    docu_codi: 1,
    mone_codi: 26,
    fact_tcam: 0,
    docuCodi: {
      docu_codi: null,
      docu_codd: null,
      docu_desc: null,      
    },
    operCodi: {
      oper_codi: null,
      oper_codd: null,
      oper_desc: null,

    },
    moneCodi: {
      mone_codi: null,
      mone_pais: null,
      mone_nomb: null,
      mone_iso: null,
      mone_simb: null,
    },
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: FacturaService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private route2: Router
  ) {}

  ngOnInit() {}

  Save(e) {
    this.model = e;
    this.dataService.sendPostRequest(this.model).subscribe(
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
        // this.validationErrors = error.error.errors;
        // this.status = error.status;
      }
    );
  }
}
