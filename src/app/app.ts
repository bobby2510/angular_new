import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  
  activeTab: any = 'home'

  handleNavClick(value: any){
    console.log(value)
    this.activeTab = value;
  }

}
