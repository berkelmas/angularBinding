import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {
  @Input() public element: string;
  @Output() sendParent = new EventEmitter<string>();

  goParent: string = "Take me to my parent pls...";

  constructor() {}

  ngOnInit() {
    this.sendParent.emit(this.goParent);
  }

  changeText() {
    this.goParent = "degistir knk lutfen...";
    this.sendParent.emit(this.goParent);
  }

}
