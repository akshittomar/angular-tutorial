import { Pipe, PipeTransform } from '@angular/core';

/**
 * A simple pipe named 'testPipe' that transforms the input value.
 * This example pipe converts the input string to uppercase.
 * 
 * Usage in template: {{ value | testPipe }}
 */
@Pipe({
  name: 'testPipe2'
})
export class TestPipe implements PipeTransform {
  // The 'transform' method is required in every Angular pipe.
  // Syntax explanation:
  // transform(value: string): string {
  // - 'transform' is the method name.
  // - '(value: string)' means it takes one argument called 'value', which must be a string.
  // - ': string' after the parentheses means the method returns a string.
  // - '{ ... }' is the body of the method, where the logic goes.
  // In this example, it takes a string and returns the uppercase version of that string.
  transform(value: string): string {
    if (!value) return '';
    return value.toUpperCase();
  }
}
