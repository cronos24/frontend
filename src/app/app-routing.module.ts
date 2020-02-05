import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

import { EstadosIndexComponent } from "./components/estados/index-estados/index-estados.component";
import { ViewEstadosComponent } from "./components/estados/view-estados/view-estados.component";
import { CreateEstadosComponent } from "./components/estados/create-estados/create-estados.component";
import { UpdateEstadosComponent } from "./components/estados/update-estados/update-estados.component";

import { ViewEmpresaComponent } from "./components/empresas/view-empresa/view-empresa.component";
import { UpdateEmpresaComponent } from "./components/empresas/update-empresa/update-empresa.component";
import { CreateEmpresaComponent } from "./components/empresas/create-empresa/create-empresa.component";
import { IndexEmpresaComponent } from "./components/empresas/index-empresa/index-empresa.component";

import { IndexVinculacionComponent } from "./components/vinculaciones/index-vinculacion/index-vinculacion.component";
import { CreateVinculacionComponent } from "./components/vinculaciones/create-vinculacion/create-vinculacion.component";
import { UpdateVinculacionComponent } from "./components/vinculaciones/update-vinculacion/update-vinculacion.component";
import { ViewVinculacionComponent } from "./components/vinculaciones/view-vinculacion/view-vinculacion.component";

import { IndexOcupacionComponent } from "./components/ocupaciones/index-ocupacion/index-ocupacion.component";
import { CreateOcupacionComponent } from "./components/ocupaciones/create-ocupacion/create-ocupacion.component";
import { UpdateOcupacionComponent } from "./components/ocupaciones/update-ocupacion/update-ocupacion.component";
import { ViewOcupacionComponent } from "./components/ocupaciones/view-ocupacion/view-ocupacion.component";

import { CreateLogoComponent } from "./components/logos/create-logo/create-logo.component";
import { ViewLogoComponent } from "./components/logos/view-logo/view-logo.component";
import { UpdateLogoComponent } from "./components/logos/update-logo/update-logo.component";

import { IndexMarcaComponent } from "./components/marcas/index-marca/index-marca.component";
import { CreateMarcaComponent } from "./components/marcas/create-marca/create-marca.component";
import { UpdateMarcaComponent } from "./components/marcas/update-marca/update-marca.component";
import { ViewMarcaComponent } from "./components/marcas/view-marca/view-marca.component";

import { IndexEntidadComponent } from "./components/entidades/index-entidad/index-entidad.component";
import { CreateEntidadComponent } from "./components/entidades/create-entidad/create-entidad.component";
import { UpdateEntidadComponent } from "./components/entidades/update-entidad/update-entidad.component";
import { ViewEntidadComponent } from "./components/entidades/view-entidad/view-entidad.component";

import { IndexPaisComponent } from "./components/paises/index-pais/index-pais.component";
import { CreatePaisComponent } from "./components/paises/create-pais/create-pais.component";
import { UpdatePaisComponent } from "./components/paises/update-pais/update-pais.component";
import { ViewPaisComponent } from "./components/paises/view-pais/view-pais.component";

import { IndexTerceroComponent } from "./components/terceros/index-tercero/index-tercero.component";
import { CreateTerceroComponent } from "./components/terceros/create-tercero/create-tercero.component";
import { UpdateTerceroComponent } from "./components/terceros/update-tercero/update-tercero.component";
import { ViewTerceroComponent } from "./components/terceros/view-tercero/view-tercero.component";

import { CreateVipeComponent } from "./components/terceros-vinculaciones/create-vipe/create-vipe.component";
import { ViewVipeComponent } from "./components/terceros-vinculaciones/view-vipe/view-vipe.component";
import { UpdateVipeComponent } from "./components/terceros-vinculaciones/update-vipe/update-vipe.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  //Estados
  {
    path: "estados",
    component: EstadosIndexComponent
  },
  {
    path: "estados/create",
    component: CreateEstadosComponent
  },
  {
    path: "estados/update/:id",
    component: UpdateEstadosComponent
  },
  {
    path: "estados/view/:id",
    component: ViewEstadosComponent
  },

  //Paises
  {
    path: "paises",
    component: IndexPaisComponent
  },
  {
    path: "paises/create",
    component: CreatePaisComponent
  },
  {
    path: "paises/update/:id",
    component: UpdatePaisComponent
  },
  {
    path: "paises/view/:id",
    component: ViewPaisComponent
  },

  //Empresa
  {
    path: "empresas",
    component: IndexEmpresaComponent
  },
  {
    path: "empresas/create",
    component: CreateEmpresaComponent
  },
  {
    path: "empresas/update/:id",
    component: UpdateEmpresaComponent
  },
  {
    path: "empresas/view/:id",
    component: ViewEmpresaComponent
  },

  //vinculaciones
  {
    path: "vinculaciones",
    component: IndexVinculacionComponent
  },
  {
    path: "vinculaciones/create",
    component: CreateVinculacionComponent
  },
  {
    path: "vinculaciones/update/:id",
    component: UpdateVinculacionComponent
  },
  {
    path: "vinculaciones/view/:id",
    component: ViewVinculacionComponent
  },
  //Ocupaciones
  {
    path: "ocupaciones",
    component: IndexOcupacionComponent
  },
  {
    path: "ocupaciones/create",
    component: CreateOcupacionComponent
  },
  {
    path: "ocupaciones/update/:id",
    component: UpdateOcupacionComponent
  },
  {
    path: "ocupaciones/view/:id",
    component: ViewOcupacionComponent
  },
  //Logos
  {
    path: "logos/create/:id",
    component: CreateLogoComponent
  },
  {
    path: "logos/update/:id",
    component: UpdateLogoComponent
  },
  {
    path: "logos/view/:id",
    component: ViewLogoComponent
  },
  //Marcas
  {
    path: "marcas",
    component: IndexMarcaComponent
  },
  {
    path: "marcas/create",
    component: CreateMarcaComponent
  },
  {
    path: "marcas/update/:id",
    component: UpdateMarcaComponent
  },
  {
    path: "marcas/view/:id",
    component: ViewMarcaComponent
  },

  //Marcas
  {
    path: "entidades",
    component: IndexEntidadComponent
  },
  {
    path: "entidades/create",
    component: CreateEntidadComponent
  },
  {
    path: "entidades/update/:id",
    component: UpdateEntidadComponent
  },
  {
    path: "entidades/view/:id",
    component: ViewEntidadComponent
  },
  //Terceros
  {
    path: "terceros",
    component: IndexTerceroComponent
  },
  {
    path: "terceros/create",
    component: CreateTerceroComponent
  },
  {
    path: "terceros/update/:id",
    component: UpdateTerceroComponent
  },
  {
    path: "terceros/view/:id",
    component: ViewTerceroComponent
  },
  //Terceros-Vinculaciones
  {
    path: "terceros-vinculaciones/create/:id",
    component: CreateVipeComponent
  },
  {
    path: "terceros-vinculaciones/view/:id",
    component: ViewVipeComponent
  },
  {
    path: "terceros-vinculaciones/update/:id",
    component: UpdateVipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//export const routingComponents= [EstadosComponent]
