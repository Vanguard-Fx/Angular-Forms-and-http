import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auto } from '../model/auto';

@Component({
  selector: 'app-reactive-auto',
  templateUrl: './reactive-auto.component.html',
  styleUrls: ['./reactive-auto.component.scss']
})
export class ReactiveAutoComponent implements OnInit {
  myAuto: Auto = new Auto(
    "BMW",
    "X5",
    "2020",
    "AB123CD"
  );

  resultVisible: boolean = false;

  autoForm: FormGroup = new FormGroup( {
    marca: new FormControl('', Validators.required),
    modello: new FormControl('', [Validators.required]),
    annoImmatricolazione: new FormControl('', Validators.required),
    targa: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
    //In teoria non servirebbe, in qunato myAuto non è istanziata
    this.autoForm.setValue({
      marca: this.myAuto.marca,
      modello: this.myAuto.modello,
      annoImmatricolazione: this.myAuto.annoImmatricolazione,
      targa: this.myAuto.targa,
    });
  }

  onSubmit() {
    console.log("Form submitted");
    if(this.autoForm.invalid) return;

    this.myAuto.marca = this.autoForm.get('marca').value;
    this.myAuto.modello = this.autoForm.get('modello').value;
    this.myAuto.annoImmatricolazione = this.autoForm.get('annoImmatricolazione').value;
    this.myAuto.targa = this.autoForm.get('targa').value;

    this.resultVisible = true;
  }

}
