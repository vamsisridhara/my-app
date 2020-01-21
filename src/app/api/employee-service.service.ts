import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private apiService: ApiService) { }
  getEmployees() {
    return this.apiService.get(`http://dummy.restapiexample.com/api/v1/employees`);
  }
}
