import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: `descCutter`,
})
export class DescriptionCutter implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let cutVal = args[0] ? args[0] : 50;

    let processedVal = value.substr(0, 50) + '...';
    console.log(processedVal, args);
    return processedVal;
  }
}
