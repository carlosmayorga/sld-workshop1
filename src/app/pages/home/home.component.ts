import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/service/http/get-users.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Users: User[];

  constructor(private getUserService: GetUsersService) { }

  ngOnInit(): void {
    this.getUserService.getUsers()
    .subscribe((response: User[]) => {

      // Logica especifica del componente
      response.forEach(r => {
        console.log(`Desde el Componente | Ciudad: ${r.address.city}`);
      });

      this.Users = response;

    });
  }

  userSelected( user: User): void {
    console.log(user.id);
  }


}
