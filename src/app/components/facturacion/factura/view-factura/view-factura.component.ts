import { Component, OnInit, ViewChild } from '@angular/core';
import { Factura } from 'src/app/Models/facturacion/Factura';
import { FacturaService } from 'src/app/services/facturacion/factura.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IndexFpagComponent } from '../../factura-pago/index-fpag/index-fpag.component';
import { FacturaPagoService } from 'src/app/services/facturacion/factura-pago.service';
import { IndexMfacComponent } from '../../factura-movimiento/index-mfac/index-mfac.component';
import { FacturaMovimientoService } from 'src/app/services/facturacion/factura-movimiento.service';

@Component({
  selector: 'app-view-factura',
  templateUrl: './view-factura.component.html',
  styles: []
})
export class ViewFacturaComponent implements OnInit {
  @ViewChild(IndexFpagComponent, { static: false }) pagos_factura: IndexFpagComponent ;
  @ViewChild(IndexMfacComponent, { static: false }) movimientos_factura: IndexMfacComponent ; 

  id: any;
  sub: any;
  model: Factura = {
    fact_codi: null,
    fact_tipo: null,
    sede_codi: null,
    sedeCodi: {
      sede_codi : null,
      sede_nomb : null,
      sede_scod : null,
      sede_dire : null,
      sede_tels : null,
      sede_celu : null,
      sede_mail : null,
      esta_codi : null,
      estaCodi: null,
      cias_codi : null,
      pais_codi : null,
      ciud_codi : null,
      paisCodi: null,
      ciudCodi: null,
    },
    proy_codi: null,
    proyCodi: {
      proy_codi: null,
      sede_codi: null,
      sedeCodi: null,
      proy_nomb: null,
      proy_pnro: null,
      proy_dura: null,
      proy_desc: null,
      esta_codi: null,
      estaCodi: null,
    },
    spro_codi: null,
    sproCodi: {
      spro_codi: null,
      proy_codi: null,
      spro_nomb: null,
      pers_auxi: null,
      spro_desc: null,
    },
    cias_codi: 1,
    fact_fech: null,
    reso_codi: null,
    resoCodi: {
      reso_codi: null,
      reso_tfac: null,
      sede_codi: null,
      sedeCodi: null,
      cias_codi: null,
      ciasCodi: null,
      reso_fech: null,
      reso_tipo: null,
      reso_reso: null,
      reso_ini: null,
      reso_fin: null,
      reso_pref: null,
      reso_cons: null,
      esta_codi: null,
      estaCodi: null,
    },
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
    persAuxi:{
      pers_auxi: null,
      pers_natu: null,
      pers_tdoc: null,
      pers_ndoc: null,
      pers_lexp: null,
      pers_dv: null,
      pers_ape1: null,
      pers_ape2: null,
      pers_nom1: null,
      pers_nom2: null,
      pers_ncom: null,
      pers_rsoc: null,
      pers_sexo: null,
      pers_fnac: null,
      pers_grh: null,
      pers_ciur: null,
      pers_dirr: null,
      pers_dirc: null,
      pers_telf: null,
      pers_telc: null,
      pers_mail: null,
      pers_malt: null,
      ocup_codi: null,
      enad_codi: null,
      pers_imag: null,
      pers_pweb: null,
      pers_obse: null,
      esta_codi: null,
      pers_codp: null,
      pers_fmod: null,
      pers_freg: null,
      username: null,
      esta_usua: null,
      pais_codi: null,
      sede_codi: null,
      sedeCodi: null,
      estaCodi: null,
      paisCodi: null,
      ocupCodi: null,
      enadCodi: null,
      pers_regi: null,

    },
    usu_logi: null,
    temp_codi: 1,
    oper_codi: null,
    docu_codi: null,
    docuCodi: {
      docu_codi: null,
      docu_codd: null,
      docu_desc: null,      
    },
    operCodi: {
      oper_codi: null,
      oper_codd: null,
      oper_desc: null,

    },
    ciasCodi: {
      cias_codi: null,
      cias_rsoc: null,
      cias_celu: null,
      cias_dire: null,
      cias_dive: null,
      cias_mail: null,
      cias_nit: null,
      cias_notf: null,
      cias_regi: null,
      cias_slog: null,
      cias_tels: null,
      cias_tipo: null,
      cias_web: null,    
      estaCodi: null,
      esta_codi: null,
    },
    mone_codi: null,
    moneCodi: {
      mone_codi: null,
      mone_pais: null,
      mone_nomb: null,
      mone_iso: null,
      mone_simb: null,
    },
    fact_tcam: null,    
  };
  proceso: boolean;

  estado_factura: string;
  tipo_factura: string;

  constructor(
    private dataService: FacturaService,
    private pagosService: FacturaPagoService,
    private movimientosService: FacturaMovimientoService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) { this.proceso= false; }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.view(this.id);
    });
    this.estado_factura = "A";    
  }

  view(id) {
    this.dataService.sendShowRequest(id).subscribe(data => {
      this.model = data[0];
      this.estado_factura = this.model.esta_codi;
      this.tipo_factura = this.model.fact_tipo;
    });
  }

  closeFact(id, model) {
    this.proceso= true;
    if (model.esta_codi=='A') {
      this.dataService.sendCloseRequest(id).subscribe(data => {
        this.proceso= false;
        if (data["status"] === 1) {
          this.model.esta_codi='PE';
          this.model.estaCodi.esta_nomb='PENDIENTE ENVIO';
          this.estado_factura ='PE'; 
          this.toastr.success(
            "<i class='far fa-info-circle fa-2x'></i>  Factura cerrada con Exito!!!"
          );  
          
          if (this.model.fact_tipo=="CR") {
            this.pagosService.sendGetRequest(this.model.fact_codi).subscribe((data: any[]) => {
              this.pagos_factura.models = data;
              this.pagos_factura.buttons = [
                {
                  id: "view",
                  label: "",
                  class: "btn btn-success btn-sm",
                  icon: "fas fa-eye",
                  style: "2px;",
                  href: "#",
                  method: "showFpag"
                },
                {
                  id: "update",
                  label: "",
                  class: "btn btn-primary btn-sm",
                  icon: "fas fa-pencil-alt",
                  style: "margin:2px;",
                  href: "#",
                  method: "editFpag"
                },
                {
                  id: "delete",
                  label: "",
                  class: "btn btn-danger btn-sm",
                  icon: "fas fa-ban",
                  style: "margin:2px;",
                  href: "#",
                  method: "deleteFpag"
                }
              ];
        
            });
          }
          
        } else {
          this.toastr.error(
            " <i class='fas fa-ban fa-2x'></i> El formulario tiene algunos errores: "+data["errors"]
          );        
        }
      });
    }else{
      this.toastr.info(
        "<i class='far fa-info-circle fa-2x'></i>  La factura ya se encuentra cerrada!!!"
      );
    }
    
  }
 

  sendFact(id, model) {
    this.proceso= true;
    if (model.esta_codi=='PE') {
      this.dataService.sendFactDianRequest(id).subscribe(data => {
        this.proceso= false;
        if (data["status"] === 1) {
          this.model.esta_codi='EN';
          this.model.estaCodi.esta_nomb='ENVIADO';
          this.estado_factura ='EN'; 
          this.toastr.success(
            "<i class='far fa-info-circle fa-2x'></i>  Factura enviada con Exito!!!"
          );     
          this.movimientosService.sendGetRequest(this.model.fact_codi).subscribe((data: any[]) => {
            this.movimientos_factura.models = data;
            this.movimientos_factura.buttons = [
              {
                id: "view",
                label: "",
                class: "btn btn-success btn-sm",
                icon: "fas fa-eye",
                style: "2px;",
                href: "#",
                method: "showFpag"
              },
             
            ];
      
          });     
        } else {
          this.toastr.error(
            " <i class='fas fa-ban fa-2x'></i> Se produjeron algunos errores: "+data["errors"]
          );        
        }
      });
    }else{
      this.toastr.info(
        "<i class='far fa-info-circle fa-2x'></i>  La factura no puede ser enviada!!!"
      );
    }
    
  }
}
