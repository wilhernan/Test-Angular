import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from '../admin-service.service';
import { Init } from '../admin-init';
import { ObjectUnsubscribedError } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  Form: FormGroup;
  createMode: boolean = true;
  seleccion: NgModel;
  elem;
  id;

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private adminService: AdminServiceService,
    private _Activatedroute: ActivatedRoute ) { }

  ngOnInit() { 
       
    this.Form = this.formBuilder.group({
      codProd: ['', Validators.required],
      desProd: ['', Validators.required],
      codProv: ['', Validators.required]
    })
  }

  addElements() {
    if (this.Form.invalid) {
      return;      
    }
    
    if (this.createMode){
      
      let newElement = {
        id: uuid(),
        codProd: this.Form.value.codProd,
        codProv: this.Form.value.codProv,
        tipo: 'p',
        done: true
      }
      this.elem.push(newElement);
      this.adminService.addElements(newElement);
      this.activeModal.dismiss();
          
    } else {
      this.id=this._Activatedroute .snapshot.params['id'];
      let elems=this.adminService.getElements();
      this.elem=elems.find(p => p.id==this.id);
      console.log(this.elem);
      if (this.Form.value) {
        console.log(this.Form.value)
        this.adminService.updateElements(this.elem,this.Form.value)
      }     
      this.activeModal.dismiss();
      
    }
  }

 
}
