import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DataTablesModule } from "angular-datatables";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

import { EstadosIndexComponent } from "./components/estados/index-estados/index-estados.component";
import { CreateEstadosComponent } from "./components/estados/create-estados/create-estados.component";
import { UpdateEstadosComponent } from "./components/estados/update-estados/update-estados.component";
import { ViewEstadosComponent } from "./components/estados/view-estados/view-estados.component";

import { CreatePaisesComponent } from "./components/paises/create-paises/create-paises.component";
import { IndexPaisesComponent } from "./components/paises/index-paises/index-paises.component";
import { UpdatePaisesComponent } from "./components/paises/update-paises/update-paises.component";
import { ViewPaisesComponent } from "./components/paises/view-paises/view-paises.component";

import { UpdateEmpresaComponent } from "./components/empresas/update-empresa/update-empresa.component";
import { FormEmpresaComponent } from "./components/empresas/form-empresa/form-empresa.component";
import { CreateEmpresaComponent } from "./components/empresas/create-empresa/create-empresa.component";
import { IndexEmpresaComponent } from "./components/empresas/index-empresa/index-empresa.component";
import { ViewEmpresaComponent } from "./components/empresas/view-empresa/view-empresa.component";

import { CreateVinculacionComponent } from "./components/vinculaciones/create-vinculacion/create-vinculacion.component";
import { FormVinculacionComponent } from "./components/vinculaciones/form-vinculacion/form-vinculacion.component";
import { IndexVinculacionComponent } from "./components/vinculaciones/index-vinculacion/index-vinculacion.component";
import { UpdateVinculacionComponent } from "./components/vinculaciones/update-vinculacion/update-vinculacion.component";
import { ViewVinculacionComponent } from "./components/vinculaciones/view-vinculacion/view-vinculacion.component";

import { CreateOcupacionComponent } from "./components/ocupaciones/create-ocupacion/create-ocupacion.component";
import { FormOcupacionComponent } from "./components/ocupaciones/form-ocupacion/form-ocupacion.component";
import { IndexOcupacionComponent } from "./components/ocupaciones/index-ocupacion/index-ocupacion.component";
import { UpdateOcupacionComponent } from "./components/ocupaciones/update-ocupacion/update-ocupacion.component";
import { ViewOcupacionComponent } from "./components/ocupaciones/view-ocupacion/view-ocupacion.component";

import { CreateLogoComponent } from "./components/logos/create-logo/create-logo.component";
import { IndexLogoComponent } from "./components/logos/index-logo/index-logo.component";
import { FormLogoComponent } from "./components/logos/form-logo/form-logo.component";
import { ViewLogoComponent } from "./components/logos/view-logo/view-logo.component";
import { UpdateLogoComponent } from "./components/logos/update-logo/update-logo.component";

import { IndexMarcaComponent } from "./components/marcas/index-marca/index-marca.component";
import { FormMarcaComponent } from "./components/marcas/form-marca/form-marca.component";
import { CreateMarcaComponent } from "./components/marcas/create-marca/create-marca.component";
import { UpdateMarcaComponent } from "./components/marcas/update-marca/update-marca.component";
import { ViewMarcaComponent } from "./components/marcas/view-marca/view-marca.component";

import { FormEntidadComponent } from "./components/entidades/form-entidad/form-entidad.component";
import { CreateEntidadComponent } from "./components/entidades/create-entidad/create-entidad.component";
import { UpdateEntidadComponent } from "./components/entidades/update-entidad/update-entidad.component";
import { ViewEntidadComponent } from "./components/entidades/view-entidad/view-entidad.component";
import { IndexEntidadComponent } from "./components/entidades/index-entidad/index-entidad.component";

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    AboutComponent,
    //estados
    EstadosIndexComponent,
    CreateEstadosComponent,
    UpdateEstadosComponent,
    ViewEstadosComponent,
    //paises
    CreatePaisesComponent,
    IndexPaisesComponent,
    UpdatePaisesComponent,
    ViewPaisesComponent,

    //Empresa
    UpdateEmpresaComponent,
    FormEmpresaComponent,
    CreateEmpresaComponent,
    IndexEmpresaComponent,
    ViewEmpresaComponent,

    //Vinculaciones
    CreateVinculacionComponent,
    FormVinculacionComponent,
    IndexVinculacionComponent,
    UpdateVinculacionComponent,
    ViewVinculacionComponent,

    //Ocupaciones
    CreateOcupacionComponent,
    FormOcupacionComponent,
    IndexOcupacionComponent,
    UpdateOcupacionComponent,
    ViewOcupacionComponent,

    //Logos
    CreateLogoComponent,
    IndexLogoComponent,
    FormLogoComponent,
    ViewLogoComponent,
    UpdateLogoComponent,

    //Marca
    IndexMarcaComponent,
    FormMarcaComponent,
    CreateMarcaComponent,
    UpdateMarcaComponent,
    ViewMarcaComponent,

    //Entidades
    IndexEntidadComponent,
    FormEntidadComponent,
    CreateEntidadComponent,
    UpdateEntidadComponent,
    ViewEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: "XSRF-TOKEN",
      headerName: "X-XSRF-TOKEN"
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      enableHtml: true,
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
