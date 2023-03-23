import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nultilicaPor'
})
export class NultilicaPorPipe implements PipeTransform {

  transform(valor: number, multiplicador: number): unknown {
    return valor * multiplicador;
  }

}
