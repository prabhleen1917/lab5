import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to angular-app';
  private name:string = 'Prabhleen';
  private balance:string = '$3000';

  people = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      email: "janesmith@example.com"
    },
    {
      id: 3,
      name: "Emily Johnson",
      age: 35,
      email: "emilyjohnson@example.com"
    },
    {
      id: 4,
      name: "Michael Brown",
      age: 28,
      email: "michaelbrown@example.com"
    },
    {
      id: 5,
      name: "Sarah Davis",
      age: 32,
      email: "sarahdavis@example.com"
    }
  ];
  

  getName() {
    return this.name;
  }

  getBalance() {
    return this.balance;
  }
}
