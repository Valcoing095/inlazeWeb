import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client-service.service';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent implements OnInit{
  listPrestamos = []


  constructor(private prestamosService: ClientService){}
  ngOnInit(): void {
    this.getPrestamos()
  }

  getPrestamos(){
    this.prestamosService.getClients().subscribe({
      next: (result) => {
        this.listPrestamos = result
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
}
