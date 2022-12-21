import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { FirstUpperPipe } from './first-upper.pipe';
import { TypePokemonsComponent } from './type-pokemons/type-pokemons.component';
import { RefreshComponent } from './refresh/refresh.component';




@NgModule({
  declarations: [
    MenuComponent,
    PokemonsComponent,
    FirstUpperPipe,
    TypePokemonsComponent,
    RefreshComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    PokemonsComponent,
]
})
export class ComponentsModule { }
