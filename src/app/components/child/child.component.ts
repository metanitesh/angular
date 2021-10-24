import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() todos
  @Output() selected = new EventEmitter
  @Output() deleted = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }


}
