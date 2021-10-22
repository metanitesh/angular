import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  selectedCourse = {
    title: "nitesh",
    description: "Js"
  }

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {

  }

  reset() {
    this.selectedCourse = {
      title: "",
      description: ""
    }
  }

  save() {
    this.courseService.create(this.selectedCourse)
  }

}
