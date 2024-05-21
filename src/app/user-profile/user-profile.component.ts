import { Component, Input, computed, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  userName = signal('Jogn Doe');

  @Input()
  firstName = signal('siddhant')

  @Input()
  lastName = signal('prajapati')

  fullName = computed( () => this.firstName() + " " + this.lastName())

  constructor(){
    console.log(this.userName());
    this.userName.set('My Name')
    console.log(this.userName());
    this.userName.update(name => name.toLowerCase())
    console.log(this.userName());
    
    
  }
}
