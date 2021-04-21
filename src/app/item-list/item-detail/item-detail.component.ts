import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor() { }

  @Input() item: string;
  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  addNewItem(value: string): void {
    this.newItemEvent.emit(value);
  }
}
