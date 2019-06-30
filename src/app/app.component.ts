import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-app';
  public conterValue =0;
  public stepValue = 0;

  lista(){
    
  }
  
  onFirstPlusClicked(value){
    this.conterValue=value;
  }
  onFirstStepClicked(value){
    this.stepValue=value;
  }
}

