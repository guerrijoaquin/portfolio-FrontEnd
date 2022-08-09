import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() name : any;

  @Input() date : any;
  @Input() location : any;

  @Input() description : any;

  @Input() url : any; //url for image or for <a> element
  @Input() imgItem : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
