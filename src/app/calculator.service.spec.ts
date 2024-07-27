import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toEqual(0);
  });
  it('should return the number for a single number input', () => {
    expect(service.add('1')).toBe(1);
    expect(service.add('3')).toBe(3);
  });
  it('should return the sum of two numbers', () => {
    expect(service.add('1,2')).toBe(3);
    expect(service.add('2,3')).toBe(5);
  });
  it('should return the sum of multiple numbers', () => {
    expect(service.add('1,2,3')).toBe(6);
    expect(service.add('3,2,3')).toBe(8);
  });

  it('should handle new lines as delimiters', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });
  it('should support different delimiters', () => {
    expect(service.add('//;\n1;2')).toBe(3);
  });
  
});