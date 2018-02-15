import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles:[`.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}`]
})
export class UsersComponent {

  constructor() { }
  username = "german";
  name = "";
  selectedValue;
  // ngOnInit() {
  // }
  changemyname (){
    
    this.username = "your name changed";
  }
  onChange(event){
    console.log(event.target.value);
    //alert("value changed   " + this.selectedValue);
  }
  userChecked(event){
     console.log(event.target.value)
  }

}
