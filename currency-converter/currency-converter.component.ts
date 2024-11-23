import { Component } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent {
  amount: number=0;
  fromCurrency: string='USD';
  toCurrency: string ='UAH';
  result: number=0;
  usdToUahExchangeRate: number=1;
  eurToUahExchangeRate: number=1;

  constructor(private currencyService: CurrencyService) {}

  convertCurrency() {
    if (this.amount && this.fromCurrency && this.toCurrency) {
      
      if (this.fromCurrency === 'USD' && this.toCurrency === 'EUR') {
        this.result = this.amount * this.usdToUahExchangeRate / this.eurToUahExchangeRate;
      } else if (this.fromCurrency === 'EUR' && this.toCurrency === 'USD') {
        
      }
    }
  }
}

export { CurrencyService };
