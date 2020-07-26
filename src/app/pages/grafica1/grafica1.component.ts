import {Component} from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {
  public labels1: string[] = ['Pan', 'Gaseosa', 'Mantequilla', 'Mermelada'];
  public data1 = [
    [25, 3, 2, 1],
  ]
}
