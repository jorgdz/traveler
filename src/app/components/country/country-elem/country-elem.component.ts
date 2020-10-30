import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-elem',
  templateUrl: './country-elem.component.html',
  styleUrls: ['./country-elem.component.css']
})
export class CountryElemComponent {

  @Input() public country: any;
  @Output() public countryClicked: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  getRoutesNavigate (nextCountry) {
    let urlMap = [];
    
    urlMap.push(`${this.router.url}/${nextCountry}`);

    return urlMap;
  }

  getInfoCountry () {
    this.countryClicked.emit(this.country)
  }

}
