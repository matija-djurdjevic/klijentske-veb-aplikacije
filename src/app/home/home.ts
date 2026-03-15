import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';
import { Flightmodel } from '../../models/flight.model';


@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  flights = signal<Flightmodel[]>([])
  
  constructor(){
    axios.get('https://flight.pequla.com/api/flight/list?type=departure')
    .then(rsp=>this.flights.set(rsp.data))
  }
}


