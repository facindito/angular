import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  currentItem={
    description: '',
    done: false,
    date:null
  };
  items=[];

  constructor() { }
  
  ngOnInit() {
  }
  addItem(){
    this.currentItem.date= new Date();
    this.items.push(this.currentItem);
    this.currentItem = {
      description: '',
      done: false,
      date: null
    }
  }
  deleteItem(i){
    this.items.splice(i,1);
    //this.items[i]
  }
}
