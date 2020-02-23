import { Pipe, PipeTransform } from '@angular/core';
import {IngresoEgresoModel} from './ingreso-egreso.model';

@Pipe({
  name: 'ordenIngresoEgreso'
})
export class OrdenIngresoEgresoPipe implements PipeTransform {

  transform( items: IngresoEgresoModel[] ): IngresoEgresoModel[] {

    //sort ya viene en angular
    return items.sort( (a, b ) => {
      if ( a.tipo === 'ingreso') {
        return -1;
      } else {
        return 1;
      }
    } );
  }

}
