import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { forkJoin } from 'rxjs';
import { AtencionesService } from '../../services/atenciones.service';
import { NacionalidadesService } from '../../services/nacionalidades.service';
import { PreferenciasService } from '../../services/preferencias.service';
import { ServiciosService } from '../../services/servicios.service';
import { Test6Component } from '../test6/test6.component';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrl: './test5.component.scss'
})
export class Test5Component implements OnInit {

  public atenciones: any[] = [];
  public nacionalidades: any[] = [];
  public preferencias: any[] = [];
  public servicios: any[] = [];

  constructor(
    private _bottomSheet: MatBottomSheet,
    private atencionesService: AtencionesService,
    private nacionalidadesService: NacionalidadesService,
    private preferenciasService: PreferenciasService,
    private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    /* forkJoin([
      this.atencionesService.listarAtenciones(),
      this.nacionalidadesService.listarNacionalidades(),
      this.preferenciasService.listarPreferencias(),
      this.serviciosService.listarServicios()
    ]).subscribe(
      (data: any[]) => {
        this.atenciones = data[0].data;
        this.nacionalidades = data[1].data;
        this.preferencias = data[2].data;
        this.servicios = data[3].data;
      }
    ); */
    this.atenciones = [
      {
        "value": 1,
        "text": "servicio 1"
      },
      {
        "value": 2,
        "text": "servicio 2"
      },
      {
        "value": 3,
        "text": "servicio 3"
      },
      {
        "value": 4,
        "text": "servicio 4"
      }
    ];
    this.nacionalidades = [
      {
        "value": 1,
        "text": "Peruanas"
      },
      {
        "value": 2,
        "text": "Venezolanas"
      },
      {
        "value": 3,
        "text": "Colombianas"
      },
      {
        "value": 4,
        "text": "Argentinas"
      },
      {
        "value": 5,
        "text": "Ecuatorianas"
      },
      {
        "value": 6,
        "text": "Bolivianas"
      }
    ];
    this.preferencias = [
      {
        "value": 1,
        "text": "preferencia 1"
      },
      {
        "value": 2,
        "text": "preferencia 2"
      },
      {
        "value": 3,
        "text": "preferencia 3"
      },
      {
        "value": 4,
        "text": "preferencia 4"
      }
    ];
    this.servicios = [
      {
        "value": 1,
        "text": "servicio 1"
      },
      {
        "value": 2,
        "text": "servicio 2"
      },
      {
        "value": 3,
        "text": "servicio 3"
      },
      {
        "value": 4,
        "text": "servicio 4"
      }
    ];
  }

  crear() {
    alert("Registrado");
  }

  public data: any;
  public atencionesSeleccionadas: any;
  public nacionalidadesSeleccionadas: any;
  public preferenciasSeleccionadas: any;
  public serviciosSeleccionados: any;

  openBottomSheet(): void {
    this._bottomSheet.open(Test6Component);
  }
}
