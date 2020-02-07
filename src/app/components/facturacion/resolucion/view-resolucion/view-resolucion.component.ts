import { Component, OnInit } from '@angular/core';
import { ResolucionService } from 'src/app/services/facturacion/resolucion.service';
import { ActivatedRoute } from '@angular/router';
import { Resolucion } from 'src/app/Models/facturacion/resolucion';

@Component({
  selector: 'app-view-resolucion',
  templateUrl: './view-resolucion.component.html',
  styles: []
})
export class ViewResolucionComponent implements OnInit {
  id: any;
  sub: any;
  model: Resolucion = {
    reso_codi: null,
    reso_tfac: "",
    sede_codi: 1,
    cias_codi: null,
    ciasCodi: null,
    reso_fech: null,
    reso_tipo: "",
    reso_reso: "",
    reso_ini: null,
    reso_fin: null,
    reso_pref: "",
    reso_cons: null,
    esta_codi: "A",
    estaCodi: null,
  };

  constructor(
    private dataService: ResolucionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.view(this.id);
    });
  }

  view(id) {
    this.dataService.sendShowRequest(id).subscribe(data => {
      //console.log(data);
      this.model = data[0];
    });
  }
}
