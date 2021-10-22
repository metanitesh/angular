import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = [{
    id: 1,
    author: 'Nitesh Sharma',
    title: 'Js'
  }, {
    id: 2,
    author: 'Santu Mahapatra',
    title: 'Python'
  }]

  constructor() {

  }

  create(course) {
    this.courses = this.courses.concat(course)
    console.log(this.courses)
  }

  findAll() {
    return this.courses
  }

  delete() {

  }
}
