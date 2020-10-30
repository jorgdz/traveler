import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { restCountries } from '../../api.backend';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public entryPoint:string = restCountries;

  constructor(private http: HttpClient) { }

  allCountries () {
    return this.http.get(`${this.entryPoint}/regionalbloc/usan`);
  }

  findCountryByName (name:string) {
    return this.http.get(`${this.entryPoint}/name/${name}`);
  }
  
  findCountriesByCodes (codes: Array<[]>) {
    let strCodes = '';
    strCodes += codes.map(c => `${c}`);
    strCodes = strCodes.replace(/[,]/gi,';');
    return this.http.get(`${this.entryPoint}/alpha?codes=${strCodes}`);
  }
}
