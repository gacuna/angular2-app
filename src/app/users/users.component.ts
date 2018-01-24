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

  backButtonPressedModal: boolean;
  saveButtonPressedModal: boolean;

  errorMessage: string;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.searchConditions = new Array<SearchCondition>();
    this.searchConditions.push(new SearchCondition("E-mail", "email"));
    this.searchConditions.push(new SearchCondition("Nombre", "firstName"));
    this.searchConditions.push(new SearchCondition("Apellido", "lastName"));
    this.actualFilter = undefined;
    //this.searchUsers(this.actualFilter);
  }

  searchUsers(filter: SearchFilter) {
  	this.userService.findUsers().subscribe(response => {
        if (!filter)
        	this.users = response;
        else {
        	switch (filter.getLabelValue()) {
        		case "email":
		        	this.users = response.filter(item => item.email.startsWith(filter.getQuery()));
        			break;
        		case "firstName":
		        	this.users = response.filter(item => item.firstName.startsWith(filter.getQuery()));
        			break;
    			case "lastName":
		        	this.users = response.filter(item => item.lastName.startsWith(filter.getQuery()));
    				break;
        		default:
        			break;
        	}
        }
    });
  }

  edit(user: User) {
  	this.selectedUser = user;
  }

  back() {
    this.backButtonPressedModal = true;
  }

  save() {
    this.saveButtonPressedModal = true;
  }

  handleBackButton(action: string) {
    if (action == "confirm") {
      this.selectedUser = undefined;
      this.searchUsers(this.actualFilter);
    }

    this.backButtonPressedModal = false;
  }

  handleSaveButton(action: string) {
    this.saveButtonPressedModal = false;
    
    if (action == "confirm") {
      /*
      this.crudableService.update(this.baseUrl + 'users', this.selectedUser, this.selectedUser.id).subscribe(res => {
        this.selectedUser = undefined;
      }, err => {
        this.errorMessage = 'Hubo un error interno al guardar el usuario';
      });*/
    } else {
      this.selectedUser = undefined;
    }
  }

}
