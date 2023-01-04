import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @Input() Civility:string ="";
  @Input() Name:string ="";
  @Input() Fname:string ="";
  @Input() Snum:string ="";
  @Input() Sname:string ="";
  @Input() Pcode:string ="";
  @Input() City:string ="";
  @Input() Phone:string ="";
  @Input() Email:string ="";
  @Input() Password:string ="";
  @Input() Pconfirmation:string ="";
}
