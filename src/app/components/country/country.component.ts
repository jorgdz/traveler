import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CountryService } from '../../shared/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public countries: any;
  public countryInfo:any = { name: '' };
  public totalAreas:number = 0;

  constructor(private router: Router, private serviceCountry: CountryService) {}

  ngOnInit(): void {
    this.allCountries(); 
  }

  allCountries () {
    this.serviceCountry.allCountries()
      .subscribe(res => {
        
        this.getInfoCountry(this.getLastNameCountryOfUrl());
    
        console.log(res);
        this.countries = res;

      },
      err => {
        console.log(err)
      });
  }

  getRoutesNavigate (nextCountry) {
    let urlMap = [];
    
    urlMap.push(`${this.router.url}/${nextCountry}`);

    return urlMap;
  }

  getInfoCountry (nameCountry) {
    if(nameCountry != undefined && nameCountry != '/' && nameCountry != '//' && nameCountry != null) {

      this.serviceCountry.findCountryByName(nameCountry)
        .subscribe(res => {
          this.countryInfo = res[0];

          this.serviceCountry.findCountriesByCodes(this.countryInfo.borders)
            .subscribe(response => {
              
              let arrayTmp: any = response;
              this.countryInfo.borders = arrayTmp.map(r => r['name']);
              this.totalAreas += this.countryInfo.area;

            }, error => {
              console.log(error);
            })
        },
        err => {
          console.log(err)
        });

    }
  }

  getLastNameCountryOfUrl () {
    if(this.router.url === '/') {
      return '/';
    } else {
      let arrayUrl = this.router.url.split('/');
      return arrayUrl[arrayUrl.length - 1];
    }
  }
}