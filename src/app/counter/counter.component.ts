import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() cont = 0;
  @Input() step = 0;
  @Output() plusClicked =new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onPlusClick(){
    this.cont = this.cont+this.step;
    this.plusClicked.emit(this.cont);
  }
  onMinusClick(){
    this.cont = this.cont-this.step;
  }

}
