import { Component } from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular'
  themeColor = 'blue'
  selectedCourse = { title: 'red' }
  courses = [{
    id: 1,
    author: 'Nitesh',
    title: 'Js'
  }, {
    id: 2,
    author: 'Santu',
    title: 'Python'
  }]

  updateColor() {
    this.themeColor = "red"
  }

  selectCourse(course) {
    this.selectedCourse = course
  }
}
