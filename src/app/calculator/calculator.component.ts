import { Component, OnInit } from '@angular/core';
import { Section } from './section'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  sections: Section[] = [new Section(0, 0)];
  score: number;

  constructor() { }

  ngOnInit() {
  }

  addSection() {
    this.sections.push(new Section(0, 0));
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
