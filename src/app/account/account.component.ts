import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logServ: LoggingService, private accServ: AccountService) {
  }

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accServ.updateStatus(this.id, status);
    // this.logServ.logStatusChange(status);
    this.accServ.statusUpdated.emit(status);
  }


}
