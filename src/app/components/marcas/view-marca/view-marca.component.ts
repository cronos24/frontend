import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/generales/marca.service';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/Models/general/Marca';

@Component({
  selector: 'app-view-marca',
  templateUrl: './view-marca.component.html',
  styles: []
})
export class ViewMarcaComponent implements OnInit {
  id: any;
  sub: any;
  model: Marca = {
    marc_codi: null,
    marc_nomb: null
  };

  constructor(
    private dataService: MarcaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.view(this.id);
    });
  }

  view(id) {
    this.dataService.sendShowRequest(id).subscribe(data => {
      this.model = data[0];
    });
  }

}
