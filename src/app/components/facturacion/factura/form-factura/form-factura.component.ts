import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmpresaService } from 'src/app/services/generales/empresa.service';
import { ResolucionService } from 'src/app/services/facturacion/resolucion.service';
import { Select2OptionData } from 'ng2-select2';
import { TercerosService } from 'src/app/services/generales/terceros.service';
import { SedeService } from 'src/app/services/generales/sede.service';


@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styles: []
})
export class FormFacturaComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  empresas: any[];
  resoluciones: any;
  terceros: any[];
  prueba: any[];
  parametros: any[];
  resolucion: any;
  sedes: any[];

 

  constructor(private empreService: EmpresaService, private resoService: ResolucionService, private persService: TercerosService, private sedeService: SedeService) {}

  ngOnInit() {

    let x = this; 

    $('.pers_auxi').select2();
    $('.pers_auxi').on('select2:select', function (e) {
       x.model.pers_auxi= e.params.id;
 
    });

    this.empreService.sendGetRequest().subscribe((data: any[]) => {
      this.empresas = data;
    });

    this.resoService.sendGetRequest().subscribe((data: any[]) => {
      this.parametros = data;

      this.resoluciones = this.parametros.filter(function(par){
        return par.esta_codi == 'A';
      });

    });

    this.persService.sendGetRequest().subscribe((data: any[]) => {
       this.terceros= data;
    }); 
    
    this.sedeService.sendGetRequest().subscribe((data: any[]) => {
      this.sedes= data;
   }); 
   
 
  }


  Save() {
    this.save.emit(this.model);
  }
}
