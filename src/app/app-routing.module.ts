import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

import { EstadosIndexComponent } from "./components/estados/index-estados/index-estados.component";
import { ViewEstadosComponent } from "./components/estados/view-estados/view-estados.component";
import { CreateEstadosComponent } from "./components/estados/create-estados/create-estados.component";
import { UpdateEstadosComponent } from "./components/estados/update-estados/update-estados.component";

import { IndexPaisesComponent } from "./components/paises/index-paises/index-paises.component";
import { CreatePaisesComponent } from "./components/paises/create-paises/create-paises.component";
import { UpdatePaisesComponent } from "./components/paises/update-paises/update-paises.component";
import { ViewPaisesComponent } from "./components/paises/view-paises/view-paises.component";

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

//This is my case
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

  //Estados
  {
    path: "paises",
    component: IndexPaisesComponent
  },
  {
    path: "paises/create",
    component: CreatePaisesComponent
  },
  {
    path: "paises/update/:id",
    component: UpdatePaisesComponent
  },
  {
    path: "paises/view/:id",
    component: ViewPaisesComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//export const routingComponents= [EstadosComponent]
