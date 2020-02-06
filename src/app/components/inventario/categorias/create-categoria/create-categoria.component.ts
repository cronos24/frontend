import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Models/inventario/Categoria';
import { CategoriaService } from 'src/app/services/inventario/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styles: []
})
export class CreateCategoriaComponent implements OnInit {
  model: Categoria = {
    cate_codi: null,
    cate_nomb: null,
    cate_abre: null,
    line_codi: null,
    lineaCodi: {
      line_codi:null,
      line_abre:null,
      line_nomb:null,
    
    }
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: CategoriaService,
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
          this.route2.navigate(["categorias"]);
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
