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
    ViewPaisesComponent
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
      timeOut: 1000,
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
