import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auto } from '../model/auto';

@Component({
  selector: 'app-template-driven-auto',
  templateUrl: './template-driven-auto.component.html',
  styleUrls: ['./template-driven-auto.component.scss']
})
export class TemplateDrivenAutoComponent implements OnInit {

  myAuto: Auto = new Auto(
    "BMW",
    "X5",
    "2020",
    "AB123CD"
  );

  resultVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if(form.invalid) return;

    alert('Invio del form');
    this.resultVisible = true;
  }
}
