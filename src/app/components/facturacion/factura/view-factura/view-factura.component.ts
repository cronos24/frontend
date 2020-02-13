import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/Models/facturacion/Factura';
import { FacturaService } from 'src/app/services/facturacion/factura.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-factura',
  templateUrl: './view-factura.component.html',
  styles: []
})
export class ViewFacturaComponent implements OnInit {
  id: any;
  sub: any;
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

    usu_logi: null,
    temp_codi: 1,
  };

  constructor(
    private dataService: FacturaService,
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
      console.log(data[0]);
      this.model = data[0];
    });
  }
}
