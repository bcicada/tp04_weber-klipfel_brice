import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  display = false;

  civility:string = "";
  name:string = "";
  fname:string = "";
  snum:string = "";
  sname:string = "";
  pcode:string = "";
  city:string = "";
  phone:string = "";
  email:string = "";
  password:string = "";
  pconfirmation:string = "";

  constructor() {}

  onSubmit(form: NgForm) {
    this.display = true;
  }

  ngOnInit(): void {
  }
}
