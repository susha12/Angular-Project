import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  public  exercise = [
    'CV form',
    'სახელი',
    'გვარი',
    'საკონტაკრო ინფორმაცია',
    'რესურსები(github, linkdin)',
    'სამუშაო გამოცდილება',
    'განათლება'
  ]

  ngOnInit(){

  }
}
