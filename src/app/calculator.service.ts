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
    return numbers.split(',').reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
}
