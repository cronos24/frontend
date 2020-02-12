import { Component, OnInit, ViewChild } from '@angular/core';
import { Tercero } from 'src/app/Models/general/Tercero';
import { TercerosService } from 'src/app/services/generales/terceros.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-tercero',
  templateUrl: './update-tercero.component.html',
  styles: []
})
export class UpdateTerceroComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model: Tercero = {
    pers_auxi: null,
    pers_natu: "",
    pers_tdoc: "",
    pers_ndoc: null,
    pers_lexp: "",
    pers_dv: "",
    pers_ape1: "",
    pers_ape2: "",
    pers_nom1: "",
    pers_nom2: "",
    pers_ncom: "",
    pers_rsoc: "",
    pers_sexo: "",
    pers_fnac: null,
    pers_grh: "",
    pers_ciur: "",
    pers_dirr: "",
    pers_dirc: "",
    pers_telf: "",
    pers_telc: "",
    pers_mail: "",
    pers_malt: "",
    ocup_codi: null,
    enad_codi: "",
    pers_imag: "",
    pers_pweb: "",
    pers_obse: null,
    pers_fmod: null,
    pers_freg: null,
    username: "",
    esta_usua: "",
    pais_codi: null,
    sede_codi: null,
    sedeCodi: null,
    esta_codi: "",
    pers_codp: "000000",
    pers_regi: null,
    estaCodi: {
      esta_codi: null,
      esta_tipo: "",
      esta_nomb: "",
      esta_colo: "",
    },
    paisCodi: {
      pais_codi: null,
      pais_isonum: null,
      pais_iso2: "",
      pais_iso3: "",
      pais_nombre: "",
    },
    ocupCodi: {
      ocup_codi: null,
      ocup_nomb: "",
    },
    enadCodi: {
      enad_codi: null,
      enad_nomb: "",
      estaCodi: null,
      esta_codi: "",
    }
  };

  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: TercerosService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private route2: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.Edit(this.id);
    });
  }

  Edit(id) {
    this.dataService.sendShowRequest(id).subscribe(data => {
      //console.log(data);
      this.model = data[0];
    });
  }
  Save(e) {
    this.model = e;

    this.dataService.sendPutRequest(this.model, this.id).subscribe(
      data => {
        if (data["status"] === 1) {
          // console.log(data);
          this.toastr.success(
            "<i class='far fa-thumbs-up fa-2x'></i>  Registro Modificado con Exito!!!"
          );
          this.route2.navigate(["terceros/view", this.model.pers_auxi]);
        } else {
          this.toastr.error(
            " <i class='fas fa-ban fa-2x'></i> El formulario tiene algunos errores."
          );
          this.validationErrors = data["errors"];
          this.status = data["status"];
        }
      },
      error => {
        this.toastr.error(
          " <i class='fas fa-ban fa-2x'></i> Se produjo un error intente nuevamente."
        );
        console.log(error);
      }
    );
  }
}
