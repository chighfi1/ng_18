import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cort',
  standalone: true
})
export class CortPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toLowerCase().replace(/ /g, '-');
  }

}
