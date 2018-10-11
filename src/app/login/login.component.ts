import { Component, OnInit, ViewContainerRef, ElementRef,ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private _authApi: AuthService,
    private _router: Router,
    public toastr: ToastrManager,
    private elementRef:ElementRef
    ) { }

  loginForm: FormGroup = this._formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  ngOnInit() {
  }

  public loginUser(formdata: any): void {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this._authApi.login(this.loginForm.value)
        .subscribe(data => {
          if (data.success === false) {
            this.toastr.errorToastr(data.message, 'Invalid');
          } else {
            this.toastr.successToastr('You have been successfully logged in.', 'Success');
            this._router.navigate(['/technologies/courses']);
          }
          this.loginForm.reset();
        });
    }
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
  }
}
