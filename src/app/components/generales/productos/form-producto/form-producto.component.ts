import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GrupoService } from 'src/app/services/inventario/grupo.service';
import { UnidadService } from 'src/app/services/generales/unidad.service';
import { MarcaService } from 'src/app/services/generales/marca.service';
import { ParametrosService } from 'src/app/services/generales/parametros.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styles: []
})
export class FormProductoComponent implements OnInit {
  @Input('model') model: any;
  @Output() save = new EventEmitter<MouseEvent>();

  grupos: any;
  unidades: any;
  marcas: any;
  params: any;
  Params_tipo_prod: any;

  constructor(private paramsService: ParametrosService, private grupoService: GrupoService, private umedService: UnidadService, private marcaService: MarcaService) { }

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
      this.grupoService.sendGetRequest().subscribe(data => {      
      this.grupos = data;
      });

      this.paramsService.sendGetRequest().subscribe(data => {      
        this.params = data;
        //console.log(this.parametros);
  
        this.Params_tipo_prod = this.params.filter(function(par){
          return par.parg_nomb == 'PS';
        });  
     
        });

      this.umedService.sendGetRequest().subscribe(data => {      
        this.unidades = data;    
      });

      this.marcaService.sendGetRequest().subscribe(data => {      
        this.marcas = data;           
      });
  }
  

  Save(){
     this.save.emit(this.model);
  }
}
