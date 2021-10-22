import { Component, OnInit } from '@angular/core';
import { CoursesService } from './shared/services/courses.service'

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'angular'
  themeColor = 'blue'
  selectedCourse = { title: 'red' }
  courses = null

  constructor(private coursesService: CoursesService) {

  }
  updateColor() {
    this.themeColor = "red"
  }

  ngOnInit() {
    this.courses = this.coursesService.findAll()
  }
  selectCourse(course) {
    this.selectedCourse = course
  }
}
