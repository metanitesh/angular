import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  todos = ['wash', 'paint', 'walk']
  constructor() { }

  ngOnInit(): void {
  }

  deleteCourse() {
    console.log('course deleted')
  }
}
