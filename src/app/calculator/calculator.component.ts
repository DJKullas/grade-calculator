import { Component, OnInit } from '@angular/core';
import { Section } from './section'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  sections: Section[] = [new Section(null, null)];
  score: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addSection() {
    this.sections.push(new Section(null, null));
  }

  calculateScore() {
    let temp = 0;
    this.score = 0;
    this.sections.forEach(s => {
      temp = s.grade * s.percent * .01;
      this.score += temp;
    });
  }
}
