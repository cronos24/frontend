import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/Models/inventario/Grupo';
import { GrupoService } from 'src/app/services/inventario/grupo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-grupo',
  templateUrl: './create-grupo.component.html',
  styles: []
})
export class CreateGrupoComponent implements OnInit {
  model: Grupo = {
    grup_codi: null,
    grup_nomb: null,
    grup_abre: null,
    cate_codi: null,
    cateCodi: {
      cate_codi:null,
      cate_abre:null,
      cate_nomb:null,
      line_codi:null,
      lineaCodi:null,
    }
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: GrupoService,
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
          this.route2.navigate(["grupos"]);
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
