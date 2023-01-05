import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit{
  name:string = "";
  type:string = "";
  price:string = "";

  constructor(private http:HttpClient) {  }

  addProduct(form: NgForm) {
    this.http.post("http://localhost:3000/salesProduct", form.value).subscribe();
  }

  deleteProduct() {
    this.http.delete("http://localhost:3000/salesProduct").subscribe();
  }

  ngOnInit(): void {
  }
}
