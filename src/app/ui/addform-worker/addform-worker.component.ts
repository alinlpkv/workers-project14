import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  name: string;
  surname: string;
  type = 0;
  phone: string;
  myWorkerType = MyWorkerType;
  workerForm: FormGroup;

  @ViewChild('n') n: ElementRef;
  @ViewChild('s') s: ElementRef;
  @ViewChild('p') p: ElementRef;
  @Input() title: string;
  @Output() addWorker = new EventEmitter<MyWorker>();

  public mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  constructor() { }

  ngOnInit() {
    this.workerForm = new FormGroup({
      name: new FormControl({ value: null, disabled: false }, [Validators.required]),
      surname: new FormControl({ value: null, disabled: false }, [Validators.required]),
      phone: new FormControl({ value: null, disabled: false }, [Validators.required]),
      type: new FormControl({value:0, disabled: false})
    });
  }


  onAddWorker() {
    this.workerForm.updateValueAndValidity();
    //if (this.n.nativeElement.value != '' && this.s.nativeElement.value != '' && this.p.nativeElement.value != '') {
     let worker = this.workerForm.value;
      console.log(worker);
      this.addWorker.emit(worker);
  //  }
  //  else alert('Заполните имя и фамилию');
  }
}
