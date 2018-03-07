import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
//created element to represent the server referrenced in the server-element.html
//defined the element type definitions
//why can't we access the element from the outside
//by default, all properties of components are only accessable inside these components, not outside
//you have to be implicit to what you want shown to the outside
//add decorator @Input() and make sure it is in the inport list
//you can add an alias to a component
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
