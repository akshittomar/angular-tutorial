import { Pipe, PipeTransform } from '@angular/core';

/**
 * A simple pipe named 'testPipe' that transforms the input value.
 * This example pipe converts the input string to uppercase.
 * 
 * Usage in template: {{ value | testPipe }}
 */
@Pipe({
  name: 'testPipe'
})
export class TestPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.toUpperCase();
  }
}
