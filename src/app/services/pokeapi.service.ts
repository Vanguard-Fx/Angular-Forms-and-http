import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokemonByName(pokemonName: string) {
    return this.http.get(API_URL + 'pokemon/' + pokemonName);
  }
}
