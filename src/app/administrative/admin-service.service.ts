import { Injectable } from '@angular/core';
import { Init } from './admin-init';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService extends Init {
  opcion: string;
  private obtenerOpcion = new Subject<string>();
  observable =this.obtenerOpcion.asObservable();

  constructor() { 
    super()
    console.log('AdminService Works');
    this.load();
  }

  cargarOpcion(opcion: string) {
    this.opcion = opcion;
    this.obtenerOpcion.next(opcion);
  }

  getElements() {       
    let elem = JSON.parse(localStorage.getItem(this.opcion));
    return elem;
  }

  addElements(newElem) {
      let elems = JSON.parse(localStorage.getItem(this.opcion));
      elems.push(newElem);
      localStorage.setItem(this.opcion, JSON.stringify(elems));
  }

  deleteElements(id) {
      let elems = JSON.parse(localStorage.getItem(this.opcion));
      for(let i = 0; i <elems.length; i++) {
      if(elems[i].id == id) {
        elems.splice(i, 1);
      }
   }
      localStorage.setItem(this.opcion, JSON.stringify(elems));
   }

  updateElements(oldElem, newElem){  
      let elems = JSON.parse(localStorage.getItem(this.opcion));
      for(let i = 0; i <elems.length; i++) {
      if(elems[i].id == oldElem.id) {
        elems[i] = newElem;
      }
   }
      localStorage.setItem(this.opcion, JSON.stringify(elems));
   }
}
