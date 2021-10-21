import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.selectedCourse = {
      title: "",
      description: ""
    }
  }

  save() {
    console.log("save", this.selectedCourse)
  }

}
