import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef 
} from '@angular/core';







@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

//added OnChanges to the implements, good practice to do if you add that hook below
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef

  //we'll see the log in the beginning
  // and every other time the server elements are created
  //because all of the hooks are executed, because its a brand new instance
  constructor() {
    console.log('constructor called!');
   }

   //this is the only hook that receives an arugment
   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
   }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }
//AfterviewInit gives you access to the template elements
//before this hook has been reached, you can't access the template elements
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
