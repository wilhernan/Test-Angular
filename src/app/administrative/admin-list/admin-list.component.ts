import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminFormComponent } from '../admin-form/admin-form.component';
import { AdminServiceService } from '../admin-service.service';
import { Init } from '../admin-init'


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  datos;
  opcionSeleccionada: string = '0';
  opcion: string;  
  elems: string[];


  constructor(private modalService: NgbModal,
    private adminService: AdminServiceService) { 
    this.datos = ['productos','proveedores','inventario','tiendas'];
   
    }

  ngOnInit() {       
   
  }

    ennviarOpcion(opcion){       
    this.adminService.cargarOpcion(opcion);
  }

  clickAdd(){
    this.opcion = this.opcionSeleccionada;
    this.ennviarOpcion(this.opcion);   
    this.elems = this.adminService.getElements();     
            
  }

  handleCreateClick(){
    const modal = this.modalService.open(AdminFormComponent);
    modal.result.then(
      this.handleModalAdminFormClose.bind(this),
      this.handleModalAdminFormClose.bind(this)
    )
  }

  handleModalAdminFormClose(response){    
    // is response an object?
    if (response === Object(response)) {
        (response.createMode) 
        response.todo.id = response.id;
        this.elems.unshift(response.todo);
      
    }
  
}

  handleEditClick(todo: Init) {
    const modal = this.modalService.open(AdminFormComponent);
    modal.result.then(
      this.handleModalAdminFormClose.bind(this),
      this.handleModalAdminFormClose.bind(this)
    )
    modal.componentInstance.createMode = false;
    modal.componentInstance.todo = todo;
  }

  handleDeleteClick(todoId: string, index: number) {
    this.adminService.deleteElements(todoId)
    
      
        this.elems.splice(index, 1);
      
  }

  
  
}



