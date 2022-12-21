import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { TypePokemonsComponent } from './components/type-pokemons/type-pokemons.component';

const routes: Routes = [
  {path:'', component: PokemonsComponent, pathMatch: 'full'},
  {path:'type/:id', component:TypePokemonsComponent},
  {path:'refresh', component:RefreshComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
