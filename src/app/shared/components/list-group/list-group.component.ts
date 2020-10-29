import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {

  @Input() Users: User[];
  @Output() userSelected = new EventEmitter<User>();
  title = 'Listado de usuarios';

  constructor() { }

  ngOnInit(): void {
    console.log(this.Users);
  }

  selectUser(item: User): void {
    this.userSelected.emit(item);
  }

}
