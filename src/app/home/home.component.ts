import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public currentUser : any;

  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = [
    {
      url: 'assets/img/sliderone.jpg',
      data:'What would you like to learn?',
      button:'Browse Our Online Courses',
      link:''
    },
    {
      url: 'assets/img/slidertwo.jpg',
      data:'Enjoy your study with our experts',
      button:'View Courses',
      link:''
    },
    {
      url: 'assets/img/sliderthree.jpg',
      data:'Largest education institute',
      button:'Read more About us',
      link:''
    }
  ]
  
  constructor(private _router: Router,
    private _spinner: NgxSpinnerService,
    private elementRef:ElementRef,
    public toastr: ToastrManager) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
     /** spinner starts on init */
     this._spinner.show();
 
     setTimeout(() => {
         /** spinner ends after 5 seconds */
         this._spinner.hide();
     }, 500);
   
  }

  public startTest() {
     if(this.currentUser) {
        this._router.navigate(['/technologies/courses'])
     }else {
        this.toastr.infoToastr('Please Login','Info',{
          position : 'top-center'
        })
     }
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
  }
}
