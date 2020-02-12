import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/general/Producto';
import { ProductoService } from 'src/app/services/generales/producto.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styles: []
})
export class CreateProductoComponent implements OnInit {
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
      umed_codd:null,
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
    prod_venc : "N",
    prod_vcoa : null,
    prod_iva : "N",
    prod_ic  : "N",
    prod_vsal : "",
    prod_obse : "",
    prod_imag : "",
    prod_reqs : "",
    sede_codi : null,
    sedeCodi : null, 
    usua_codi : 1,
    };
    validationErrors: any[] = [];
    status: any;
    constructor(
      private dataService: ProductoService,
      private toastr: ToastrService,
      private route: ActivatedRoute,
      private route2: Router
    ) {}

    ngOnInit() {}

    Save(e) {
      this.model = e;

      switch(this.model.prod_tipo) { 
        case 'SV': { 
          this.model.marc_nomb=null;
          this.model.prod_codb=null;
          this.model.prod_venc=null;
          this.model.prod_smin=null;
          this.model.prod_smax=null;
          this.model.prod_stoc=null;
          this.model.prod_valc=null;
          this.model.prod_vcoa=null;
          this.model.prod_porv=null;
           break; 
        } 
      
     }

      this.dataService.sendPostRequest(this.model).subscribe(
        data => {
          if (data["status"] === 1) {
            this.model = data["model"];
            this.toastr.success(
              "<i class='far fa-thumbs-up fa-2x'></i>  Registro Guardado con Exito!!!"
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
