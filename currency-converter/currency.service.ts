import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiURL = 'https://bank.gov.ua/NBU_Exchange/exchange_site?start=20220115&end=20220131&valcode=usd&sort=exchangedate&order=desc'; 

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<any> {
    return this.http.get(`${this.apiURL}/latest`);
  }
}