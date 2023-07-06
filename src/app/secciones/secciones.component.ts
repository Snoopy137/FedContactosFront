import { Component, Injectable, numberAttribute } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})

export class SeccionesComponent {

  panelOpenState = false;
  secciones: any;
  subsecciones: any;

  constructor(private httpClientService: HttpClientService){

  }

  async ngOnInit() {
    this.httpClientService.getSecciones("secciones/listarsecciones").subscribe((Response)=>{
      this.secciones = Response
    });
  }

  clicked(body: any){
    console.log(body);
    this.httpClientService.getSeccionesBySeccion("subsecciones/subseccionbyseccion", body).subscribe((Response)=>{
      this.subsecciones = Response
      console.log(this.subsecciones)
    });
  }
}
