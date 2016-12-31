import { Component } from '@angular/core';

@Component({
  selector: 'income-query',
  template: `
    <div class='income-query'>
      <input #income_input type='text' value='{{income}}' class='income-box'/>
      <img (click)='breakup(income_input)' class='arrow-right' src='/resources/arrow-right.png'/>
    </div>
  `,
})

export class AppComponent  {
  income: Number;

  constructor() {
    this.income = 1000;
  }

  breakup(income_input: HTMLInputElement): void {
    this.income = parseFloat(income_input.value);
    console.log("Income : " + this.income);
  }
}
