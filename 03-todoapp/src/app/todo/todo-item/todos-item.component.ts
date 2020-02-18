import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TodoModel} from '../model/todo.model';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: TodoModel;

  // Con ViewChild puedo capturar el elemento del HTML
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor() { }

  ngOnInit() {
    this.chkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    console.log(this.todo);

  }

  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
      }, 1
    );
  }

  terminarEdicion() {
    this.editando = false;
  }
}
