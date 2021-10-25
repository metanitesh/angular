import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  todos = ['wash', 'paint', 'walk']
  name = 'Nitesh'
  constructor() { }

  ngOnInit(): void {
  }

  deleteCourse(event) {
    console.log('course deleted')
  }

  selectCourse(event) {
    console.log('course selected')
  }
}
