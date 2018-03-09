import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
//sometimes you want to get access to local reference or any element, before you call the method
//@ViewChild() can achieve this, must pass in the arugment the selector of the element
//local reference is fetched through @ViewChild
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  //emits a new type of the server created
  //this is what we emit onAddServer
  //by adding nameInput, we access the value of this input
  //which we got access through the local reference
  //arguemenf for onAddServer, add HTMLInputElement
  //so we know the value is there
  onAddServer(nameInput: HTMLInputElement) {
    
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
//we added atInput to make a property bindable from outside
//we have to add something to onAddServer and onAddBluerpint to make it listenable from outside