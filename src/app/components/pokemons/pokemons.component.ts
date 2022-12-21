import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicePokeService } from 'src/app/services/service-poke.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  offset: number = 0;
  limit: number = 100;

  pokemonStatus: any;
  imagePlaceholder: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAAD09PTMzMzZ2dkhISHv7+/m5ubU1NRKSkrHx8eOjo5QUFCpqal4eHhVVVUrKyv4+PiysrKqqqpBQUEZGRk1NTU7OzsJCQlzc3OUlJQZO629AAABVElEQVR4nO3cy07CUBSGUS6VigoqN9H3f1BHpZOdyC2esw9rjUvyfzkMmjbpZAIAAAAAAAAAAAAAAAAw6Obn6ktPvdJyeq5V6alXeleosHoKFdZP4SMVbkpPvUS3exvsTwW7PtCNhYfTb75K7//bc3RGy+jKWXic/733cgpHCmulcKSwVgpHCmulcKSwVgpHCmulcKSwVmFh+PQla+HsJTAPr0xaeD6F+SnMT2F+CvNrtXARvV3bfwwaKFxPj4OxcDX5HJTed7t19Nfcll51T2Fh1vf4IYX5KcxPYX6NFvbf68HhlLXfbgZd6YE366KDe2rgDu0kLpyVnnVHCvNTmJ/C/BTmpzA/hfkpzE9hfg9aeGypsH8N/LT0nAYAoAUPeuetMBWF+SnMT2F+CvNTmJ/C/BTmpzC/9gvDDy1MWyqcLCKlRwEAAAAAAAAAAAAAAAB1+gWlkhf/xP9IqQAAAABJRU5ErkJggg=="
  baseURl: string = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`;

  constructor(private service: ServicePokeService) {

  }

  ngOnInit(): void {
    this.service.getAllPokemon(this.baseURl).subscribe(
      res => this.pokemonStatus = res.results
    )

  }

  loadMorePokemon(){
    
    this.offset = this.offset + 100;
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`
    this.service.getAllPokemon(url).subscribe(
      res => this.pokemonStatus = res.results
    )
  }

  effectBar(valor:number){

    return (valor/2) + "%"
  }

  effectColorBar(valor:number){
    var color;
    if(valor <= 30){
      color = "#E15656";
    }else if(valor > 30 && valor <= 70){
      color = "#F69F26"
    }else if(valor > 70 && valor <= 100){
      color = "#F7CC3A"
    }else{
      color = "#75AB5B"
    }

    return color
  }



}
