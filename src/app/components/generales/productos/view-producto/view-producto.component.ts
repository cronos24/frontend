import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/general/Producto';
import { ProductoService } from 'src/app/services/generales/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styles: []
})
export class ViewProductoComponent implements OnInit {
  id: any;
  sub: any;
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

  constructor(
    private dataService: ProductoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.view(this.id);
    });
  }

  view(id) {
    this.dataService.sendShowRequest(id).subscribe(data => {
      //console.log(data[0]);
      this.model = data[0];
    });
  }
}
