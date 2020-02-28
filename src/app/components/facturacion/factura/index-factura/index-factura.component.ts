import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { FacturaService } from 'src/app/services/facturacion/factura.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Helper } from 'src/app/Helpers/Helper';

@Component({
  selector: 'app-index-factura',
  templateUrl: './index-factura.component.html',
  styles: []
})
export class IndexFacturaComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtInstance: DataTables.Api;
  dtTrigger = new Subject();

  models = [];
  buttons = [];
  headers = [];

  temp = false;
  fact_activa: any;

  constructor(
    private dataService: FacturaService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Tipo", "Tercero", "Periodo", "Fecha", "Estado"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10,
      order: [ 0, 'desc' ]
    };
    this.getFact();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getFact() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.models = data;

      this.fact_activa = this.models.filter(function(fact){
        return fact.esta_codi == 'A';
        });

        this.fact_activa = this.fact_activa.length;
    
      this.buttons = [
        {
          id: "view",
          label: "",
          class: "btn btn-success btn-sm",
          icon: "fas fa-eye",
          style: "2px;",
          href: "#",
          show: true,
          method: "showFact"
        },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          show: true,
          method: "editFact"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-ban",
          style: "margin:2px;",
          href: "#",
          show: true,
          method: "deleteFact"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteFact(id, model) {

    if (model.esta_codi=='EN') {
      if (confirm("Esta seguro de Anular el registro?")) {
        this.dataService.sendDeleteRequest(id).subscribe(data => {
          if (data["status"] === 1) {
            const index = this.models.findIndex(item => item.fact_codi === id);
            this.models[index].esta_codi = data["model"].esta_codi;
            this.models[index].estaCodi.esta_nomb = "ANULADO";
            this.toastr.warning(
              "<i class='fas fa-exclamation-triangle fa-2x'></i> Registro Anulado con Exito!!!"
            );
          } else {
            this.toastr.error("No se puede Anulador el registro.");
          }
        
        });
      }
    }else{
      this.toastr.error(
        "<i class='fas fa-exclamation-triangle fa-2x'></i> No se puede Anular una factura que no ha sido enviada a la DIAN."
      );
    }
    
  }

  showFact(id, model) {
    this.route.navigate(["facturas/view", id]);
   }

  editFact(id, model) {
    //

    if(model.esta_codi=='A'){
      Helper.isNextStep = true;
      this.route.navigate(["facturas/update", id]);      
    }else{
      Helper.Message = 'El estado de la factura no permite modificaciones';
      this.toastr.error("<i class='fas fa-ban'></i> El estado de la factura no permite modificaciones.");
    }

  }

  createFact() {
    this.route.navigate(["facturas/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getFact();
    });
  }
}
