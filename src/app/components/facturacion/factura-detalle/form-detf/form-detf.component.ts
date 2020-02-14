import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FacturaDetalleService } from 'src/app/services/facturacion/factura-detalle.service';
import { ProductoService } from 'src/app/services/generales/producto.service';
import { FacturaService } from 'src/app/services/facturacion/factura.service';
import { UnidadService } from 'src/app/services/generales/unidad.service';
import { ParametrosService } from 'src/app/services/generales/parametros.service';

@Component({
  selector: 'app-form-detf',
  templateUrl: './form-detf.component.html',
  styles: []
})
export class FormDetfComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  factura: any[];
  productos: any[];
  unidades: any[];
  parametros: any;
  Params_iva: any;
  Params_ic: any;

  constructor(private factService: FacturaService, private prodService: ProductoService, private umedService: UnidadService, private paramsService: ParametrosService) { }

  ngOnInit() {

    let me = this;

    $('.prod_codi').select2();
    $('.prod_codi').on('select2:select', function (e) {
      //@ts-ignore      
      me.model.prod_codi= e.params.data.id;
      //@ts-ignore 
      me.getInfoProd(e.params.data.id);
    });

    this.factService.sendGetRequest().subscribe((data: any[]) => {
      this.factura = data;
    });

    this.prodService.sendGetRequest().subscribe((data: any[]) => {
      this.productos = data;
    });

    this.umedService.sendGetRequest().subscribe((data: any[]) => {
      this.unidades = data;
    });

    this.paramsService.sendGetRequest().subscribe(data => {      
        this.parametros = data;
          this.Params_iva = this.parametros.filter(function(par){
          return (par.parg_nomb == 'IMP' && par.parg_tdoc == 'IVA');
          });
          this.Params_ic = this.parametros.filter(function(par){
          return (par.parg_nomb == 'IMP' && par.parg_tdoc == 'IC');
          });
    });
  }

  getInfoProd(id){
   
    var GeTprod = null;
    GeTprod = this.productos.filter(function(prod){
      return prod.prod_codi == id;
    });

    this.model.detf_valu= GeTprod[0].prod_valv;
    this.model.umed_codi= GeTprod[0].umed_codi;

    if(GeTprod[0].prod_iva=='S'){
      this.model.detf_iva= this.Params_iva[0].parg_obse;
    }else{
      this.model.detf_iva=0;
    }

    if(GeTprod[0].prod_ic=='S'){
      this.model.detf_ic= this.Params_ic[0].parg_obse;
    }else{
      this.model.detf_ic=0;
    }    
  
  }

  Save() {
    this.save.emit(this.model);
  }
}
