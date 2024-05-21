import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signal-example';

  fName = signal('siddhant');
  enterFirstName(fname : string){
    this.fName.set(fname);
  }

  lName = signal('Prajapati');
  enterLastName(lname : string){
    this.lName.set(lname);
  }
}
