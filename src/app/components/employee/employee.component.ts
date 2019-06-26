import { Component, OnInit, Input, OnDestroy, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() employees = null;
  @Output() emitEmployee;
  // @ViewChild('deleteSwal', { static: false }) private deleteSwal: SwalComponent;
  constructor() {
    this.emitEmployee = new EventEmitter();
  }
  ngAfterViewInit() {

  }

  ngOnInit() {

  }
  raiseBtn(employee) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
        this.emitEmployee.emit(employee);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }

  ngOnDestroy(): void {
  }
}
