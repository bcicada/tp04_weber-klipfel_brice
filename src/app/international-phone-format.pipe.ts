import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'internationalPhoneFormat'
})
export class InternationalPhoneFormatPipe implements PipeTransform {
  transform(rawNumber:string) {
    rawNumber = rawNumber.charAt(0) == "0" ? "" + rawNumber : "0" + rawNumber;

    let newNumber = "";
    let i = 0;

    for (; i < Math.floor(rawNumber.length / 2) - 1; i++) {
      newNumber = newNumber + rawNumber.substr(i * 2, 2) + "-";
    }

    return newNumber + rawNumber.substr(i * 2);
  }
}
