import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DataTablesModule } from "angular-datatables";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { Select2Module } from 'ng2-select2';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

import { EstadosIndexComponent } from "./components/generales/estados/index-estados/index-estados.component";
import { CreateEstadosComponent } from "./components/generales/estados/create-estados/create-estados.component";
import { UpdateEstadosComponent } from "./components/generales/estados/update-estados/update-estados.component";
import { ViewEstadosComponent } from "./components/generales/estados/view-estados/view-estados.component";

import { UpdateEmpresaComponent } from "./components/generales/empresas/update-empresa/update-empresa.component";
import { FormEmpresaComponent } from "./components/generales/empresas/form-empresa/form-empresa.component";
import { CreateEmpresaComponent } from "./components/generales/empresas/create-empresa/create-empresa.component";
import { IndexEmpresaComponent } from "./components/generales/empresas/index-empresa/index-empresa.component";
import { ViewEmpresaComponent } from "./components/generales/empresas/view-empresa/view-empresa.component";

import { CreateVinculacionComponent } from "./components/generales/vinculaciones/create-vinculacion/create-vinculacion.component";
import { FormVinculacionComponent } from "./components/generales/vinculaciones/form-vinculacion/form-vinculacion.component";
import { IndexVinculacionComponent } from "./components/generales/vinculaciones/index-vinculacion/index-vinculacion.component";
import { UpdateVinculacionComponent } from "./components/generales/vinculaciones/update-vinculacion/update-vinculacion.component";
import { ViewVinculacionComponent } from "./components/generales/vinculaciones/view-vinculacion/view-vinculacion.component";

import { CreateOcupacionComponent } from "./components/generales/ocupaciones/create-ocupacion/create-ocupacion.component";
import { FormOcupacionComponent } from "./components/generales/ocupaciones/form-ocupacion/form-ocupacion.component";
import { IndexOcupacionComponent } from "./components/generales/ocupaciones/index-ocupacion/index-ocupacion.component";
import { UpdateOcupacionComponent } from "./components/generales/ocupaciones/update-ocupacion/update-ocupacion.component";
import { ViewOcupacionComponent } from "./components/generales/ocupaciones/view-ocupacion/view-ocupacion.component";

import { CreateLogoComponent } from "./components/generales/logos/create-logo/create-logo.component";
import { IndexLogoComponent } from "./components/generales/logos/index-logo/index-logo.component";
import { FormLogoComponent } from "./components/generales/logos/form-logo/form-logo.component";
import { ViewLogoComponent } from "./components/generales/logos/view-logo/view-logo.component";
import { UpdateLogoComponent } from "./components/generales/logos/update-logo/update-logo.component";

import { IndexMarcaComponent } from "./components/generales/marcas/index-marca/index-marca.component";
import { FormMarcaComponent } from "./components/generales/marcas/form-marca/form-marca.component";
import { CreateMarcaComponent } from "./components/generales/marcas/create-marca/create-marca.component";
import { UpdateMarcaComponent } from "./components/generales/marcas/update-marca/update-marca.component";
import { ViewMarcaComponent } from "./components/generales/marcas/view-marca/view-marca.component";

import { FormEntidadComponent } from "./components/generales/entidades/form-entidad/form-entidad.component";
import { CreateEntidadComponent } from "./components/generales/entidades/create-entidad/create-entidad.component";
import { UpdateEntidadComponent } from "./components/generales/entidades/update-entidad/update-entidad.component";
import { ViewEntidadComponent } from "./components/generales/entidades/view-entidad/view-entidad.component";
import { IndexEntidadComponent } from "./components/generales/entidades/index-entidad/index-entidad.component";

import { IndexPaisComponent } from "./components/generales/paises/index-pais/index-pais.component";
import { CreatePaisComponent } from "./components/generales/paises/create-pais/create-pais.component";
import { FormPaisComponent } from "./components/generales/paises/form-pais/form-pais.component";
import { ViewPaisComponent } from "./components/generales/paises/view-pais/view-pais.component";
import { UpdatePaisComponent } from "./components/generales/paises/update-pais/update-pais.component";

import { IndexTerceroComponent } from './components/generales/terceros/index-tercero/index-tercero.component';
import { UpdateTerceroComponent } from './components/generales/terceros/update-tercero/update-tercero.component';
import { FormTerceroComponent } from './components/generales/terceros/form-tercero/form-tercero.component';
import { CreateTerceroComponent } from './components/generales/terceros/create-tercero/create-tercero.component';
import { ViewTerceroComponent } from './components/generales/terceros/view-tercero/view-tercero.component';

import { IndexVipeComponent } from './components/generales/terceros-vinculaciones/index-vipe/index-vipe.component';
import { ViewVipeComponent } from './components/generales/terceros-vinculaciones/view-vipe/view-vipe.component';
import { CreateVipeComponent } from './components/generales/terceros-vinculaciones/create-vipe/create-vipe.component';
import { UpdateVipeComponent } from './components/generales/terceros-vinculaciones/update-vipe/update-vipe.component';
import { FormVipeComponent } from './components/generales/terceros-vinculaciones/form-vipe/form-vipe.component';

import { CreatePetrComponent } from './components/generales/terceros-impuestos/create-petr/create-petr.component';
import { IndexPetrComponent } from './components/generales/terceros-impuestos/index-petr/index-petr.component';
import { UpdatePetrComponent } from './components/generales/terceros-impuestos/update-petr/update-petr.component';
import { FormPetrComponent } from './components/generales/terceros-impuestos/form-petr/form-petr.component';
import { ViewPetrComponent } from './components/generales/terceros-impuestos/view-petr/view-petr.component';

import { FormImpuestosComponent } from './components/generales/impuestos/form-impuestos/form-impuestos.component';
import { CreateImpuestosComponent } from './components/generales/impuestos/create-impuestos/create-impuestos.component';
import { UpdateImpuestosComponent } from './components/generales/impuestos/update-impuestos/update-impuestos.component';
import { IndexImpuestosComponent } from './components/generales/impuestos/index-impuestos/index-impuestos.component';
import { ViewImpuestosComponent } from './components/generales/impuestos/view-impuestos/view-impuestos.component';

import { ViewObligacionComponent } from './components/generales/obligaciones/view-obligacion/view-obligacion.component';
import { FormObligacionComponent } from './components/generales/obligaciones/form-obligacion/form-obligacion.component';
import { CreateObligacionComponent } from './components/generales/obligaciones/create-obligacion/create-obligacion.component';
import { UpdateObligacionComponent } from './components/generales/obligaciones/update-obligacion/update-obligacion.component';
import { IndexObligacionComponent } from './components/generales/obligaciones/index-obligacion/index-obligacion.component';

import { IndexPeobComponent } from './components/generales/terceros-obligaciones/index-peob/index-peob.component';
import { FormPeobComponent } from './components/generales/terceros-obligaciones/form-peob/form-peob.component';
import { CreatePeobComponent } from './components/generales/terceros-obligaciones/create-peob/create-peob.component';
import { UpdatePeobComponent } from './components/generales/terceros-obligaciones/update-peob/update-peob.component';
import { ViewPeobComponent } from './components/generales/terceros-obligaciones/view-peob/view-peob.component';
import { ViewLineaComponent } from './components/inventario/lineas/view-linea/view-linea.component';
import { IndexLineaComponent } from './components/inventario/lineas/index-linea/index-linea.component';
import { CreateLineaComponent } from './components/inventario/lineas/create-linea/create-linea.component';
import { UpdateLineaComponent } from './components/inventario/lineas/update-linea/update-linea.component';
import { FormLineaComponent } from './components/inventario/lineas/form-linea/form-linea.component';
import { FormCategoriaComponent } from './components/inventario/categorias/form-categoria/form-categoria.component';
import { UpdateCategoriaComponent } from './components/inventario/categorias/update-categoria/update-categoria.component';
import { CreateCategoriaComponent } from './components/inventario/categorias/create-categoria/create-categoria.component';
import { IndexCategoriaComponent } from './components/inventario/categorias/index-categoria/index-categoria.component';
import { ViewCategoriaComponent } from './components/inventario/categorias/view-categoria/view-categoria.component';
import { ViewGrupoComponent } from './components/inventario/grupos/view-grupo/view-grupo.component';
import { IndexGrupoComponent } from './components/inventario/grupos/index-grupo/index-grupo.component';
import { CreateGrupoComponent } from './components/inventario/grupos/create-grupo/create-grupo.component';
import { UpdateGrupoComponent } from './components/inventario/grupos/update-grupo/update-grupo.component';
import { FormGrupoComponent } from './components/inventario/grupos/form-grupo/form-grupo.component';
import { FormUnidadComponent } from './components/generales/unidades/form-unidad/form-unidad.component';
import { UpdateUnidadComponent } from './components/generales/unidades/update-unidad/update-unidad.component';
import { CreateUnidadComponent } from './components/generales/unidades/create-unidad/create-unidad.component';
import { IndexUnidadComponent } from './components/generales/unidades/index-unidad/index-unidad.component';
import { ViewUnidadComponent } from './components/generales/unidades/view-unidad/view-unidad.component';
import { ViewProductoComponent } from './components/generales/productos/view-producto/view-producto.component';
import { IndexProductoComponent } from './components/generales/productos/index-producto/index-producto.component';
import { CreateProductoComponent } from './components/generales/productos/create-producto/create-producto.component';
import { UpdateProductoComponent } from './components/generales/productos/update-producto/update-producto.component';
import { FormProductoComponent } from './components/generales/productos/form-producto/form-producto.component';
import { FormResolucionComponent } from './components/facturacion/resolucion/form-resolucion/form-resolucion.component';
import { IndexResolucionComponent } from './components/facturacion/resolucion/index-resolucion/index-resolucion.component';
import { ViewResolucionComponent } from './components/facturacion/resolucion/view-resolucion/view-resolucion.component';
import { CreateResolucionComponent } from './components/facturacion/resolucion/create-resolucion/create-resolucion.component';
import { UpdateResolucionComponent } from './components/facturacion/resolucion/update-resolucion/update-resolucion.component';
import { IndexDetfComponent } from './components/facturacion/factura-detalle/index-detf/index-detf.component';
import { ViewDetfComponent } from './components/facturacion/factura-detalle/view-detf/view-detf.component';
import { FormDetfComponent } from './components/facturacion/factura-detalle/form-detf/form-detf.component';
import { CreateDetfComponent } from './components/facturacion/factura-detalle/create-detf/create-detf.component';
import { UpdateDetfComponent } from './components/facturacion/factura-detalle/update-detf/update-detf.component';
import { UpdateFacturaComponent } from './components/facturacion/factura/update-factura/update-factura.component';
import { CreateFacturaComponent } from './components/facturacion/factura/create-factura/create-factura.component';
import { FormFacturaComponent } from './components/facturacion/factura/form-factura/form-factura.component';
import { IndexFacturaComponent } from './components/facturacion/factura/index-factura/index-factura.component';
import { ViewFacturaComponent } from './components/facturacion/factura/view-factura/view-factura.component';
import { FormSedeComponent } from './components/generales/sedes/form-sede/form-sede.component';
import { CreateSedeComponent } from './components/generales/sedes/create-sede/create-sede.component';
import { UpdateSedeComponent } from './components/generales/sedes/update-sede/update-sede.component';
import { IndexSedeComponent } from './components/generales/sedes/index-sede/index-sede.component';
import { ViewSedeComponent } from './components/generales/sedes/view-sede/view-sede.component';
import { ViewProyectoComponent } from './components/generales/proyectos/view-proyecto/view-proyecto.component';
import { IndexProyectoComponent } from './components/generales/proyectos/index-proyecto/index-proyecto.component';
import { CreateProyectoComponent } from './components/generales/proyectos/create-proyecto/create-proyecto.component';
import { UpdateProyectoComponent } from './components/generales/proyectos/update-proyecto/update-proyecto.component';
import { FormProyectoComponent } from './components/generales/proyectos/form-proyecto/form-proyecto.component';
import { FormSproComponent } from './components/generales/sub-proyectos/form-spro/form-spro.component';
import { CreateSproComponent } from './components/generales/sub-proyectos/create-spro/create-spro.component';
import { UpdateSproComponent } from './components/generales/sub-proyectos/update-spro/update-spro.component';
import { IndexSproComponent } from './components/generales/sub-proyectos/index-spro/index-spro.component';
import { ViewSproComponent } from './components/generales/sub-proyectos/view-spro/view-spro.component';



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
    ViewEntidadComponent,

    //Paises
    IndexPaisComponent,
    CreatePaisComponent,
    FormPaisComponent,
    ViewPaisComponent,
    UpdatePaisComponent,

    //Terceros
    IndexTerceroComponent,
    UpdateTerceroComponent,
    FormTerceroComponent,
    CreateTerceroComponent,
    ViewTerceroComponent,

    //TercerosVinculaciones
    IndexVipeComponent,
    ViewVipeComponent,
    CreateVipeComponent,
    UpdateVipeComponent,
    FormVipeComponent,

    //TercerosImpuestos
    CreatePetrComponent,
    IndexPetrComponent,
    UpdatePetrComponent,
    FormPetrComponent,
    ViewPetrComponent,

    //Impuestos
    FormImpuestosComponent,
    CreateImpuestosComponent,
    UpdateImpuestosComponent,
    IndexImpuestosComponent,
    ViewImpuestosComponent,

    //Obligaciones
    ViewObligacionComponent,
    FormObligacionComponent,
    CreateObligacionComponent,
    UpdateObligacionComponent,
    IndexObligacionComponent,

    //TercerosObligaciones
    IndexPeobComponent,
    FormPeobComponent,
    CreatePeobComponent,
    UpdatePeobComponent,
    ViewPeobComponent,

    //Linea
    ViewLineaComponent,
    IndexLineaComponent,
    CreateLineaComponent,
    UpdateLineaComponent,
    FormLineaComponent,

    //Categoria
    FormCategoriaComponent,
    UpdateCategoriaComponent,
    CreateCategoriaComponent,
    IndexCategoriaComponent,
    ViewCategoriaComponent,
    
    //Grupo
    ViewGrupoComponent,
    IndexGrupoComponent,
    CreateGrupoComponent,
    UpdateGrupoComponent,
    FormGrupoComponent,

    //Unidades de medida
    FormUnidadComponent,
    UpdateUnidadComponent,
    CreateUnidadComponent,
    IndexUnidadComponent,
    ViewUnidadComponent,

    //Producto
    ViewProductoComponent,
    IndexProductoComponent,
    CreateProductoComponent,
    UpdateProductoComponent,
    FormProductoComponent,

    //Reoluciones
    FormResolucionComponent,
    IndexResolucionComponent,
    ViewResolucionComponent,
    CreateResolucionComponent,
    UpdateResolucionComponent,

    //Factura-detalle
    IndexDetfComponent,
    ViewDetfComponent,
    FormDetfComponent,
    CreateDetfComponent,
    UpdateDetfComponent,

    //Factura
    UpdateFacturaComponent,
    CreateFacturaComponent,
    FormFacturaComponent,
    IndexFacturaComponent,
    ViewFacturaComponent,
    FormSedeComponent,
    CreateSedeComponent,
    UpdateSedeComponent,
    IndexSedeComponent,
    ViewSedeComponent,
    ViewProyectoComponent,
    IndexProyectoComponent,
    CreateProyectoComponent,
    UpdateProyectoComponent,
    FormProyectoComponent,
    FormSproComponent,
    CreateSproComponent,
    UpdateSproComponent,
    IndexSproComponent,
    ViewSproComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    Select2Module,
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
