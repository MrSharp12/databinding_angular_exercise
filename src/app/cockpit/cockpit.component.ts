import { Component, OnInit, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
//we had to add serverCreated and blueprintCreated properties
//because they were events that were emmited in the app component html
//inside the app-cockpit tag
//EventEmitter is a generic type, indicated in ts by the <>
//inside the <>, we add the type of data that we are going to emit
//must add () at the end of the emitter, to call the call the EventEmitter construcor
//and create a new EventEmitter object, which is stored in serverCreated
//we add @Output() because we are passing something OUT of the component
//we're passing our own event out of the component
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
  //emits a new type of the server created
  //this is what we emit onAddServer
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

}
//we added atInput to make a property bindable from outside
//we have to add something to onAddServer and onAddBluerpint to make it listenable from outside