import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';


@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable <User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((r: User[]) => {
       // Operaciones generales sobre los datos
        console.log(`Desde el Servicio   | longitud de data: ${r.length}`);

        return r;
      })
    );
  }

}
