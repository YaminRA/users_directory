import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: number, ...args): string {
    let formattedPhone = '(';
    formattedPhone += value.toString().slice(0, 3);
    formattedPhone += ') ';
    formattedPhone += value.toString().slice(3, 6);
    formattedPhone += '-';
    formattedPhone += value.toString().slice(5, 9);
    return formattedPhone;
  }

}
