import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { ServicePokeService } from 'src/app/services/service-poke.service';
import { TypePokemonsComponent } from '../type-pokemons/type-pokemons.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  typesPokemon: any
  attributesType: string[] = ["FIRE", "WATER", "FLY", "GRASS"];
  pokemonStatus: any;

  


  constructor(private service: ServicePokeService, private router: Router) {
   
   }

  ngOnInit(): void {
    this.service.getTypesPokemons().subscribe(
      res => this.typesPokemon = res.results
    )
  }

  targetEvent(event: any){
    let rota = event.target.innerText.toLowerCase()
    rota = "type/" + rota
    this.router.navigate(['/refresh'])

    timer(5).subscribe((
      res => this.router.navigate([rota])
    ))
        
  }

  

  effectBackgroundType(valor:string){
    return valor + "-background"
  }

}
