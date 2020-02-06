import { Component, OnInit, ViewChild } from '@angular/core';
import { TerceroImpuesto } from 'src/app/Models/general/TerceroImpuesto';
import { TercerosImpuestosService } from 'src/app/services/generales/terceros-impuestos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-petr',
  templateUrl: './update-petr.component.html',
  styles: []
})
export class UpdatePetrComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model:  TerceroImpuesto = {
    petr_codi: null,
    pers_auxi: null,
    impu_codi: null,
    impuCodi: {
      impu_codi: null,
      impu_code: null,
      inpu_desc: null,
      esta_codi: null
    },
    esta_codi: "A",
    estaCodi: {
      esta_codi: null,
      esta_nomb: null,
      esta_tipo: null,
      esta_colo: null
    }   
  };

  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: TercerosImpuestosService,
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
