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
    const numberArray = numbers.split(delimiter);
    
    const negatives = numberArray.filter(num => parseInt(num, 10) < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
  
  
}
