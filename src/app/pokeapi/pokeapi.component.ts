import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.scss']
})
export class PokeapiComponent implements OnInit {
  pokemonName: string = 'ditto';

  pokemonResult: any;

  pokemonError: any;

  constructor(private pokeService: PokeapiService) { }

  ngOnInit(): void {
  }

  onFormSubmit(myForm: NgForm ) {
    this.pokemonResult = undefined;
    this.pokemonError = undefined;

    if(myForm.invalid) return;

    this.pokeService.getPokemonByName(this.pokemonName).subscribe(
      (data) => {
        this.pokemonResult = data;
      },
      (error) => {
        this.pokemonError = error;
      }
    );
  }

}
