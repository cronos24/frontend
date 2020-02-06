import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/Models/general/Producto';
import { ProductoService } from 'src/app/services/generales/producto.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.component.html',
  styles: []
})
export class UpdateProductoComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model: Producto = {
    prod_codi : null,
    grup_codi :null,
    grupCodi : {
      grup_codi:null,
      grup_nomb:null,
      grup_abre:null,
      cateCodi :null,
      cate_codi:null,
    },
    prod_tipo : "",
    umed_codi :null,
    umedCodi : {
      umed_codi:null,
      umed_nomb:null,
      umed_abre:null,
    },
    prod_codm : "",
    prod_cods : "",
    prod_refe : "",
    prod_desc : "",
    marc_nomb : "",
    prod_valc : null,
    prod_valv : null,
    prod_porv : null,
    prod_gara : null,
    esta_codi : "A",
    estaCodi : {
      esta_codi: null,
      esta_tipo: "",
      esta_nomb: "",
      esta_colo: "",
    },
    prod_codb : "",
    prod_stoc : null,
    prod_smin : null,
    prod_smax : null,
    prod_secc : "",
    prod_venc : "",
    prod_vcoa : null,
    prod_iva : 0,
    prod_ic  : 0,
    prod_vsal : "",
    prod_obse : "",
    prod_imag : "",
    prod_reqs : "",
    sede_codi : 1,
    usua_codi : 1,
    };

  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: ProductoService,
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
          this.route2.navigate(["productos/view", this.model.prod_codi]);
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
