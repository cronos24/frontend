import { Component, OnInit } from '@angular/core';
import { FacturaMovimiento } from 'src/app/Models/facturacion/FacturaMovimiento';
import { FacturaMovimientoService } from 'src/app/services/facturacion/factura-movimiento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-mfac',
  templateUrl: './view-mfac.component.html',
  styles: []
})
export class ViewMfacComponent implements OnInit {
  id: any;
  sub: any;
  model: FacturaMovimiento = {
    mfac_codi: null, 
    fact_codi: null, 
    mfac_codd: null, 
    mfac_fact: null, 
    mfac_cufe: null, 
    mfac_vali: null, 
    mfac_fres: null, 
    mfac_hash: null, 
    mfac_mess: null, 
    mfac_mval: null, 
    mfac_nomb: null, 
    mfac_cqr:  null, 
    mfac_rnot: null, 
    mfac_rval: null, 
    mfac_resu: null, 
    mfac_tcuf: null, 
    mfac_xml:  null, 
    mfac_para: null,
  };
  myAngularxQrCode: string = null;
  XmlCode: string;
  ParametrosCode: string;

  constructor(
    private dataService: FacturaMovimientoService,
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
      this.model = data[0];
      this.myAngularxQrCode = this.model.mfac_cqr;
      this.XmlCode = atob(this.model.mfac_xml);
      this.ParametrosCode = atob(this.model.mfac_para);
    });
  }
}
