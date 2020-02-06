import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from 'src/app/Models/inventario/Categoria';
import { CategoriaService } from 'src/app/services/inventario/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.component.html',
  styles: []
})
export class UpdateCategoriaComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

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
  id: any;
  sub: any;

  constructor(
    private dataService: CategoriaService,
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
        this.toastr.error(
          " <i class='fas fa-ban fa-2x'></i> Se produjo un error intente nuevamente."
        );
        console.log(error);
      }
    );
  }
}
