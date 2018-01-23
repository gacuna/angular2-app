import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User, SearchCondition, SearchFilter } from '../domain/model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser: User;
  users: Array<User>;
  searchConditions: Array<SearchCondition>;

  actualFilter: SearchFilter;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.searchConditions = new Array<SearchCondition>();
    this.searchConditions.push(new SearchCondition("E-mail", "email"));
    this.searchConditions.push(new SearchCondition("Nombre", "firstName"));
    this.searchConditions.push(new SearchCondition("Apellido", "lastName"));
    this.actualFilter = undefined;
    this.searchUsers(this.actualFilter, false);
  }

  searchUsers(filter: SearchFilter, changeOffset?: boolean) {
  	this.userService.findUsers().subscribe(response => {
        this.users = response;
    });  	
  }

  edit(user: User) {
  	this.selectedUser = user;
  }

}
