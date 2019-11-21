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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//export const routingComponents= [EstadosComponent]
