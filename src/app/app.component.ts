import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {

  }
  updateColor() {
    this.themeColor = "red"
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/courses').subscribe(courses => this.courses = courses)
    console.log(this.courses)
  }
  selectCourse(course) {
    this.selectedCourse = course
  }
}
