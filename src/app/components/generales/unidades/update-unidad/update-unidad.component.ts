import { Component, OnInit, ViewChild } from '@angular/core';
import { Unidad } from 'src/app/Models/general/Unidad';
import { UnidadService } from 'src/app/services/generales/unidad.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-unidad',
  templateUrl: './update-unidad.component.html',
  styles: []
})
export class UpdateUnidadComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model: Unidad = {
    umed_codi: null,
    umed_nomb: null,
    umed_abre: null
  };

  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: UnidadService,
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
          this.route2.navigate(["unidades"]);
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
