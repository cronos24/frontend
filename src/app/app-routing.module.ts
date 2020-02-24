import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

import { EstadosIndexComponent } from "./components/generales/estados/index-estados/index-estados.component";
import { ViewEstadosComponent } from "./components/generales/estados/view-estados/view-estados.component";
import { CreateEstadosComponent } from "./components/generales/estados/create-estados/create-estados.component";
import { UpdateEstadosComponent } from "./components/generales/estados/update-estados/update-estados.component";

import { ViewEmpresaComponent } from "./components/generales/empresas/view-empresa/view-empresa.component";
import { UpdateEmpresaComponent } from "./components/generales/empresas/update-empresa/update-empresa.component";
import { CreateEmpresaComponent } from "./components/generales/empresas/create-empresa/create-empresa.component";
import { IndexEmpresaComponent } from "./components/generales/empresas/index-empresa/index-empresa.component";

import { IndexVinculacionComponent } from "./components/generales/vinculaciones/index-vinculacion/index-vinculacion.component";
import { CreateVinculacionComponent } from "./components/generales/vinculaciones/create-vinculacion/create-vinculacion.component";
import { UpdateVinculacionComponent } from "./components/generales/vinculaciones/update-vinculacion/update-vinculacion.component";
import { ViewVinculacionComponent } from "./components/generales/vinculaciones/view-vinculacion/view-vinculacion.component";

import { IndexOcupacionComponent } from "./components/generales/ocupaciones/index-ocupacion/index-ocupacion.component";
import { CreateOcupacionComponent } from "./components/generales/ocupaciones/create-ocupacion/create-ocupacion.component";
import { UpdateOcupacionComponent } from "./components/generales/ocupaciones/update-ocupacion/update-ocupacion.component";
import { ViewOcupacionComponent } from "./components/generales/ocupaciones/view-ocupacion/view-ocupacion.component";

import { CreateLogoComponent } from "./components/generales/logos/create-logo/create-logo.component";
import { ViewLogoComponent } from "./components/generales/logos/view-logo/view-logo.component";
import { UpdateLogoComponent } from "./components/generales/logos/update-logo/update-logo.component";

import { IndexMarcaComponent } from "./components/generales/marcas/index-marca/index-marca.component";
import { CreateMarcaComponent } from "./components/generales/marcas/create-marca/create-marca.component";
import { UpdateMarcaComponent } from "./components/generales/marcas/update-marca/update-marca.component";
import { ViewMarcaComponent } from "./components/generales/marcas/view-marca/view-marca.component";

import { IndexEntidadComponent } from "./components/generales/entidades/index-entidad/index-entidad.component";
import { CreateEntidadComponent } from "./components/generales/entidades/create-entidad/create-entidad.component";
import { UpdateEntidadComponent } from "./components/generales/entidades/update-entidad/update-entidad.component";
import { ViewEntidadComponent } from "./components/generales/entidades/view-entidad/view-entidad.component";

import { IndexPaisComponent } from "./components/generales/paises/index-pais/index-pais.component";
import { CreatePaisComponent } from "./components/generales/paises/create-pais/create-pais.component";
import { UpdatePaisComponent } from "./components/generales/paises/update-pais/update-pais.component";
import { ViewPaisComponent } from "./components/generales/paises/view-pais/view-pais.component";

import { IndexTerceroComponent } from "./components/generales/terceros/index-tercero/index-tercero.component";
import { CreateTerceroComponent } from "./components/generales/terceros/create-tercero/create-tercero.component";
import { UpdateTerceroComponent } from "./components/generales/terceros/update-tercero/update-tercero.component";
import { ViewTerceroComponent } from "./components/generales/terceros/view-tercero/view-tercero.component";

import { CreateVipeComponent } from "./components/generales/terceros-vinculaciones/create-vipe/create-vipe.component";
import { ViewVipeComponent } from "./components/generales/terceros-vinculaciones/view-vipe/view-vipe.component";
import { UpdateVipeComponent } from "./components/generales/terceros-vinculaciones/update-vipe/update-vipe.component";

import { CreatePetrComponent } from "./components/generales/terceros-impuestos/create-petr/create-petr.component";
import { ViewPetrComponent } from "./components/generales/terceros-impuestos/view-petr/view-petr.component";
import { UpdatePetrComponent } from "./components/generales/terceros-impuestos/update-petr/update-petr.component";

import { CreatePeobComponent } from "./components/generales/terceros-obligaciones/create-peob/create-peob.component";
import { ViewPeobComponent } from "./components/generales/terceros-obligaciones/view-peob/view-peob.component";
import { UpdatePeobComponent } from "./components/generales/terceros-obligaciones/update-peob/update-peob.component";

import { IndexImpuestosComponent } from "./components/generales/impuestos/index-impuestos/index-impuestos.component";
import { CreateImpuestosComponent } from "./components/generales/impuestos/create-impuestos/create-impuestos.component";
import { UpdateImpuestosComponent } from "./components/generales/impuestos/update-impuestos/update-impuestos.component";
import { ViewImpuestosComponent } from "./components/generales/impuestos/view-impuestos/view-impuestos.component";

import { IndexObligacionComponent } from "./components/generales/obligaciones/index-obligacion/index-obligacion.component";
import { CreateObligacionComponent } from "./components/generales/obligaciones/create-obligacion/create-obligacion.component";
import { UpdateObligacionComponent } from "./components/generales/obligaciones/update-obligacion/update-obligacion.component";
import { ViewObligacionComponent } from "./components/generales/obligaciones/view-obligacion/view-obligacion.component";

import { CreateUnidadComponent } from './components/generales/unidades/create-unidad/create-unidad.component';
import { IndexUnidadComponent } from './components/generales/unidades/index-unidad/index-unidad.component';
import { UpdateUnidadComponent } from './components/generales/unidades/update-unidad/update-unidad.component';
import { ViewUnidadComponent } from './components/generales/unidades/view-unidad/view-unidad.component';

import { IndexLineaComponent } from './components/inventario/lineas/index-linea/index-linea.component';
import { CreateLineaComponent } from './components/inventario/lineas/create-linea/create-linea.component';
import { UpdateLineaComponent } from './components/inventario/lineas/update-linea/update-linea.component';
import { ViewLineaComponent } from './components/inventario/lineas/view-linea/view-linea.component';

import { IndexCategoriaComponent } from './components/inventario/categorias/index-categoria/index-categoria.component';
import { CreateCategoriaComponent } from './components/inventario/categorias/create-categoria/create-categoria.component';
import { UpdateCategoriaComponent } from './components/inventario/categorias/update-categoria/update-categoria.component';
import { ViewCategoriaComponent } from './components/inventario/categorias/view-categoria/view-categoria.component';

import { IndexGrupoComponent } from './components/inventario/grupos/index-grupo/index-grupo.component';
import { CreateGrupoComponent } from './components/inventario/grupos/create-grupo/create-grupo.component';
import { UpdateGrupoComponent } from './components/inventario/grupos/update-grupo/update-grupo.component';
import { ViewGrupoComponent } from './components/inventario/grupos/view-grupo/view-grupo.component';


import { IndexProductoComponent } from './components/generales/productos/index-producto/index-producto.component';
import { CreateProductoComponent } from './components/generales/productos/create-producto/create-producto.component';
import { UpdateProductoComponent } from './components/generales/productos/update-producto/update-producto.component';
import { ViewProductoComponent } from './components/generales/productos/view-producto/view-producto.component';


import { IndexResolucionComponent } from './components/facturacion/resolucion/index-resolucion/index-resolucion.component';
import { CreateResolucionComponent } from './components/facturacion/resolucion/create-resolucion/create-resolucion.component';
import { UpdateResolucionComponent } from './components/facturacion/resolucion/update-resolucion/update-resolucion.component';
import { ViewResolucionComponent } from './components/facturacion/resolucion/view-resolucion/view-resolucion.component';

import { CreateDetfComponent } from './components/facturacion/factura-detalle/create-detf/create-detf.component';
import { UpdateDetfComponent } from './components/facturacion/factura-detalle/update-detf/update-detf.component';
import { ViewDetfComponent } from './components/facturacion/factura-detalle/view-detf/view-detf.component';

import { IndexFacturaComponent } from './components/facturacion/factura/index-factura/index-factura.component';
import { ViewFacturaComponent } from './components/facturacion/factura/view-factura/view-factura.component';
import { UpdateFacturaComponent } from './components/facturacion/factura/update-factura/update-factura.component';
import { CreateFacturaComponent } from './components/facturacion/factura/create-factura/create-factura.component';
import { CreateFpagComponent } from './components/facturacion/factura-pago/create-fpag/create-fpag.component';
import { ViewFpagComponent } from './components/facturacion/factura-pago/view-fpag/view-fpag.component';
import { UpdateFpagComponent } from './components/facturacion/factura-pago/update-fpag/update-fpag.component';
import { IndexMpagComponent } from './components/facturacion/medios-pago/index-mpag/index-mpag.component';
import { CreateMpagComponent } from './components/facturacion/medios-pago/create-mpag/create-mpag.component';
import { UpdateMpagComponent } from './components/facturacion/medios-pago/update-mpag/update-mpag.component';
import { ViewMpagComponent } from './components/facturacion/medios-pago/view-mpag/view-mpag.component';
import { IndexMetpComponent } from './components/facturacion/metodos-pago/index-metp/index-metp.component';
import { CreateMetpComponent } from './components/facturacion/metodos-pago/create-metp/create-metp.component';
import { UpdateMetpComponent } from './components/facturacion/metodos-pago/update-metp/update-metp.component';
import { ViewMetpComponent } from './components/facturacion/metodos-pago/view-metp/view-metp.component';



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

  //Impuestos
  {
    path: "impuestos",
    component: IndexImpuestosComponent
  },
  {
    path: "impuestos/create",
    component: CreateImpuestosComponent
  },
  {
    path: "impuestos/update/:id",
    component: UpdateImpuestosComponent
  },
  {
    path: "impuestos/view/:id",
    component: ViewImpuestosComponent
  },

  //Obligaciones
  {
    path: "obligaciones",
    component: IndexObligacionComponent
  },
  {
    path: "obligaciones/create",
    component: CreateObligacionComponent
  },
  {
    path: "obligaciones/update/:id",
    component: UpdateObligacionComponent
  },
  {
    path: "obligaciones/view/:id",
    component: ViewObligacionComponent
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
  //Terceros-Impuestos
  {
    path: "terceros-impuestos/create/:id",
    component: CreatePetrComponent
  },
  {
    path: "terceros-impuestos/view/:id",
    component: ViewPetrComponent
  },
  {
    path: "terceros-impuestos/update/:id",
    component: UpdatePetrComponent
  },
  //Terceros-Impuestos
  {
    path: "terceros-obligaciones/create/:id",
    component: CreatePeobComponent
  },
  {
    path: "terceros-obligaciones/view/:id",
    component: ViewPeobComponent
  },
  {
    path: "terceros-obligaciones/update/:id",
    component: UpdatePeobComponent
  },
  //Unidades
  {
    path: "unidades",
    component: IndexUnidadComponent
  },
  {
    path: "unidades/create",
    component: CreateUnidadComponent
  },
  {
    path: "unidades/update/:id",
    component: UpdateUnidadComponent
  },
  // {
  //   path: "unidades/view/:id",
  //   component: ViewUnidadComponent
  // },

  //Lineas
  {
    path: "lineas",
    component: IndexLineaComponent
  },
  {
    path: "lineas/create",
    component: CreateLineaComponent
  },
  {
    path: "lineas/update/:id",
    component: UpdateLineaComponent
  },
  // {
  //   path: "lineas/view/:id",
  //   component: ViewLineaComponent
  // },

  //Categorias
  {
    path: "categorias",
    component: IndexCategoriaComponent
  },
  {
    path: "categorias/create",
    component: CreateCategoriaComponent
  },
  {
    path: "categorias/update/:id",
    component: UpdateCategoriaComponent
  },
  // {
  //   path: "categorias/view/:id",
  //   component: ViewCategoriaComponent
  // },

  //Grupos
  {
    path: "grupos",
    component: IndexGrupoComponent
  },
  {
    path: "grupos/create",
    component: CreateGrupoComponent
  },
  {
    path: "grupos/update/:id",
    component: UpdateGrupoComponent
  },
  // {
  //   path: "grupos/view/:id",
  //   component: ViewGrupoComponent
  // },

  //Productos
  {
    path: "productos",
    component: IndexProductoComponent
  },
  {
    path: "productos/create",
    component: CreateProductoComponent
  },
  {
    path: "productos/update/:id",
    component: UpdateProductoComponent
  },
  {
    path: "productos/view/:id",
    component: ViewProductoComponent
  },

  //Resoluciones
  {
    path: "resoluciones",
    component: IndexResolucionComponent
  },
  {
    path: "resoluciones/create",
    component: CreateResolucionComponent
  },
  {
    path: "resoluciones/update/:id",
    component: UpdateResolucionComponent
  },
  {
    path: "resoluciones/view/:id",
    component: ViewResolucionComponent
  },

  //Factura-Detalle
  {
    path: "factura-detalle/create/:id",
    component: CreateDetfComponent
  },
  {
    path: "factura-detalle/view/:id",
    component: ViewDetfComponent
  },
  {
    path: "factura-detalle/update/:id",
    component: UpdateDetfComponent
  },

  //Facturas
  {
    path: "facturas",
    component: IndexFacturaComponent
  },
  {
    path: "facturas/create",
    component: CreateFacturaComponent
  },
  {
    path: "facturas/update/:id",
    component: UpdateFacturaComponent
  },
  {
    path: "facturas/view/:id",
    component: ViewFacturaComponent
  },

  //Factura-Pago
  {
    path: "factura-pago/create/:id",
    component: CreateFpagComponent
  },
  {
    path: "factura-pago/view/:id",
    component: ViewFpagComponent
  },
  {
    path: "factura-pago/update/:id",
    component: UpdateFpagComponent
  },

  //Medios de pago
  {
    path: "medios-pago",
    component: IndexMpagComponent
  },
  {
    path: "medios-pago/create",
    component: CreateMpagComponent
  },
  {
    path: "medios-pago/update/:id",
    component: UpdateMpagComponent
  },
  {
    path: "medios-pago/view/:id",
    component: ViewMpagComponent
  },

  //Metodos de pago
  {
    path: "metodos-pago",
    component: IndexMetpComponent
  },
  {
    path: "metodos-pago/create",
    component: CreateMetpComponent
  },
  {
    path: "metodos-pago/update/:id",
    component: UpdateMetpComponent
  },
  {
    path: "metodos-pago/view/:id",
    component: ViewMetpComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//export const routingComponents= [EstadosComponent]
