import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  constructor() {}

  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }
  
    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEnd);
      numbers = numbers.substring(delimiterEnd + 1);
    }
  
    numbers = numbers.replace(/\n/g, delimiter);
    return numbers.split(delimiter).reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
  
}
