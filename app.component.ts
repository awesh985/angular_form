import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subjects =['male','female','other'];
  title = 'biodata';
  userModel =new User( "", "","", true );

  constructor(private _enrollmentService:EnrollmentService){}



onSubmit(){
  this._enrollmentService.enroll(this.userModel)
  .subscribe(
    data => console.log('success!', data)
  )
}
}