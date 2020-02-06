import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ParametrosService } from 'src/app/services/generales/parametros.service';
import { OcupacionService } from 'src/app/services/generales/ocupacion.service';
import { EntidadService } from 'src/app/services/generales/entidad.service';
import { CiudadService } from 'src/app/services/generales/ciudad.service';
import { PaisService } from 'src/app/services/generales/pais.service';

@Component({
  selector: 'app-form-tercero',
  templateUrl: './form-tercero.component.html',
  styles: []
})
export class FormTerceroComponent implements OnInit {
  @Input('model') model: any;
  @Output() save = new EventEmitter<MouseEvent>();

  parametros: any;
  Params_tipodoc: any;
  Params_gruposan: any;
  Params_sexo: any;
  ocupaciones: any;
  entidades: any;
  ciudades: any;
  paises: Object;
  Params_regimen: any;

  constructor(private paramsService: ParametrosService, private ocupacionesService: OcupacionService, private EntidadesService: EntidadService,private CiudadesService: CiudadService,private PaisesService: PaisService) { }

  ngOnInit() {
    this.getParams();
    
  }

  changeNatu(value){
    switch(value) { 
      case 'J': { 
        this.model.pers_nom1=null;
        this.model.pers_nom2=null;
        this.model.pers_ape1=null;
        this.model.pers_ape2=null;
         break; 
      } 
      case 'N': { 
         this.model.pers_rsoc=null;
         break; 
      } 
   } 
    
  
  }

  getParams() {
      this.paramsService.sendGetRequest().subscribe(data => {      
      this.parametros = data;
      //console.log(this.parametros);

      this.Params_tipodoc = this.parametros.filter(function(par){
        return par.parg_nomb == 'TD';
      });

      this.Params_gruposan = this.parametros.filter(function(par){
        return par.parg_nomb == 'GS';
      });

      this.Params_sexo = this.parametros.filter(function(par){
        return par.parg_nomb == 'SX';
      });

      this.Params_regimen = this.parametros.filter(function(par){
        return par.parg_nomb == 'RF';
      });

      });

      this.ocupacionesService.sendGetRequest().subscribe(data => {      
        this.ocupaciones = data;    
      });

      this.EntidadesService.sendGetRequest().subscribe(data => {      
        this.entidades = data;    
      });

      this.CiudadesService.sendGetRequest().subscribe(data => {      
        this.ciudades = data;          
      });

      this.PaisesService.sendGetRequest().subscribe(data => {      
        this.paises = data;          
      });
  }
  

  Save(){
     this.save.emit(this.model);
  }

}
