import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmpresaService } from 'src/app/services/generales/empresa.service';
import { ResolucionService } from 'src/app/services/facturacion/resolucion.service';
import { Select2OptionData } from 'ng2-select2';
import { TercerosService } from 'src/app/services/generales/terceros.service';
import { SedeService } from 'src/app/services/generales/sede.service';
import { ProyectoService } from 'src/app/services/generales/proyecto.service';
import { SubProyectoService } from 'src/app/services/generales/sub-proyecto.service';
import { DocumentoService } from 'src/app/services/facturacion/documento.service';
import { OperacionService } from 'src/app/services/facturacion/operacion.service';
import { MonedaService } from 'src/app/services/generales/moneda.service';


@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styles: []
})
export class FormFacturaComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  empresas: any[];
  resoluciones: any[];
  terceros: any[];
  prueba: any[];
  parametros: any[];
  sedes: any[];
  proyectos: any[];
  subproyectos: any[];
  documentos: any[];
  operaciones: any[];
  monedas: any[];

   

  constructor(private empreService: EmpresaService, private resoService: ResolucionService, private persService: TercerosService, private sedeService: SedeService, private proyService: ProyectoService, private sproService: SubProyectoService, private docuService: DocumentoService, private operService: OperacionService, private moneService: MonedaService) {}

  ngOnInit() {


    let me = this;

    $('.pers_auxi').select2();
    $('.pers_auxi').on('select2:select', function (e) {
      //@ts-ignore      
      me.model.pers_auxi= e.params.data.id;
    });

    this.empreService.sendGetRequest().subscribe((data: any[]) => {
      this.empresas = data;
    });
    

    this.persService.sendGetRequest().subscribe((data: any[]) => {
       this.terceros= data;
    }); 
    
    this.sedeService.sendGetRequest().subscribe((data: any[]) => {
      this.sedes= data;
    }); 

    this.docuService.sendGetRequest().subscribe((data: any[]) => {
      this.documentos= data;
    }); 

    this.operService.sendGetRequest().subscribe((data: any[]) => {
      this.operaciones= data;
    }); 

    this.moneService.sendGetRequest().subscribe((data: any[]) => {
      this.monedas= data;
      console.log(this.monedas);
    }); 

    this.proyService.sendGetRequest().subscribe((data: any[]) => {
      this.proyectos= data;
    }); 

    this.resoService.sendGetRequest().subscribe((data: any[]) => {
      var FcTreso = data;
      this.resoluciones = FcTreso.filter(function(reso){
        return (reso.esta_codi == 'A' && reso.sede_codi == me.model.sede_codi);
      });      
    }); 

    this.sproService.sendGetRequest().subscribe((data: any[]) => {      
      this.subproyectos= data;
    }); 

    
  }

   

  changeSede(value){
    this.model.proy_codi= null;
    this.model.reso_codi= null;
    this.model.spro_codi= null;

    this.proyService.sendGetRequest().subscribe((data: any[]) => {
      var GeTproy = data;
      this.proyectos  = GeTproy.filter(function(proy){
        return proy.sede_codi == value;
      });
    });   

    this.resoService.sendGetRequest().subscribe((data: any[]) => {
      var FcTreso = data;
      this.resoluciones = FcTreso.filter(function(reso){
        return (reso.esta_codi == 'A' && reso.sede_codi == value);
      });
    });
    
  }


  changeProy(value){
    this.model.spro_codi= null;

    this.sproService.sendGetRequest().subscribe((data: any[]) => {
      var GeTspro = data;
      this.subproyectos  = GeTspro.filter(function(proy){       
        return proy.proy_codi == value;
      });

    });     
  }


  Save() {
    
    this.save.emit(this.model);
  }
}
