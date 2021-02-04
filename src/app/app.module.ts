import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveAutoComponent } from './reactive-auto/reactive-auto.component';
import { TemplateDrivenAutoComponent } from './template-driven-auto/template-driven-auto.component';
import { PokeapiComponent } from './pokeapi/pokeapi.component';

const routes: Routes = [
  {
    path: 'reactive-auto-form',
    component: ReactiveAutoComponent,
  },
  {
    path: 'template-driven-auto-form',
    component: TemplateDrivenAutoComponent,
  },
  {
    path: 'pokeapi',
    component: PokeapiComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ReactiveAutoComponent,
    TemplateDrivenAutoComponent,
    PokeapiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
