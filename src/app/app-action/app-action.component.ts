import {Component, OnInit} from '@angular/core';

export interface Message {
  severity?: string;
  summary?: string;
  detail?: string;
  id?: any;
}

@Component({selector: 'app-action', templateUrl: './app-action.component.html', styleUrls: ['./app-action.component.css']})

export class AppActionComponent implements OnInit {

  constructor() {}

  msgs: Message[] = [];
  items : any[];

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'fa-refresh',
        command: () => {
          this.update();
        }
      }, {
        label: 'Delete',
        icon: 'fa-close',
        command: () => {
          this.delete();
        }
      }
    ];
  }

  save() {
    this.msgs = [];
    this
      .msgs
      .push({severity: 'info', summary: 'Success', detail: 'Data Saved ..'})
  }

  update() {
    this.msgs = [];
    this
      .msgs
      .push({severity: 'info', summary: 'Success', detail: 'Data updated ..'})

  }

  delete() {
    this.msgs = [];
    this
      .msgs
      .push({severity: 'info', summary: 'Success', detail: 'Data deleted ..'})
    }
}