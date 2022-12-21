import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicePokeService {



  typesUrl:string = 'https://pokeapi.co/api/v2/type';




  constructor(private http: HttpClient) {


  }

  getAllPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      tap(res => res),
      tap((res) => {
        res.results.map((response: any) => {
          this.apiGetPokemons(response.url).subscribe(
            res => response.status = res
          )
        })
      })
    )
  }

  getTypesPokemons():Observable<any> {
    return this.http.get<any>(this.typesUrl).pipe(
      tap(res => res)

    )
  }

  getPokemonsType(type:string):Observable<any>{
    return this.http.get<any>(this.typesUrl + "/" + type).pipe(
      tap(res => res),
      tap((res) => {
        res.pokemon.map((response: any) => {
          this.apiGetPokemons(response.pokemon.url).subscribe(
            res => response.pokemon.status = res
          )
        })
      })
    )
  }

  apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
















}
