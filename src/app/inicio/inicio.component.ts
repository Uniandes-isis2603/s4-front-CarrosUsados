import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Automovil } from '../automovil/automovil'
import { AutomovilService } from '../automovil/automovil.service';
import { Modelo } from 'src/app/modelo/modelo';
import { ModeloService } from 'src/app/modelo/modelo.service';
import { Marca } from '../marca/marca'
import { MarcaService } from '../marca/marca.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent implements OnInit {
    
    constructor(
    private automovilService: AutomovilService,
    private modeloService: ModeloService, 
    private marcaService:MarcaService) { }
    
     automoviles: Automovil[];
     
     automovil_id: number;
       modelos: Modelo[];

    modelo_id: any;
    marcas:Marca[];
    
    marca_id: any;
    
     selectedAutomovil: Automovil;
     
      onSelected(automovil_id: number): void {
    this.automovil_id = automovil_id;

  }
    onModeloSelected(idModelo: any) {
    this.modelo_id = idModelo;
    this.getAutomovilesOfModelo(idModelo);
  }
  
    getModelos() {

    this.modeloService.getModelos()
      .subscribe(modelos => this.modelos = modelos);
  }
    
       getAutomoviles() {
    this.automovilService.getAutomoviles()
      .subscribe(automoviles => this.automoviles = automoviles);
  }
  
    getMarcas() {
      this.marcaService.getMarcas()
        .subscribe(marcas => this.marcas = marcas);
  }
  
    getAutomovilesOfModelo(modeloId: any) {
    this.automovilService.getAutomovilesOfModelo(modeloId)
      .subscribe(automoviles => this.automoviles = automoviles);
  }
    getAutomovilDetail(): void {
    this.automovilService.getAutomovilDetail(this.modelo_id, this.automovil_id)
      .subscribe(selectedAutomovil => {
        this.selectedAutomovil = selectedAutomovil;
      });
  }
  
  
    ngOnInit() {
            this.selectedAutomovil = undefined;
    this.automovil_id = undefined;
            this.getModelos();
this.getMarcas();
    this.modelo_id = -1;
        
    }
    
}
