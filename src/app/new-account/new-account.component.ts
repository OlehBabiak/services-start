import {Component, EventEmitter, Output} from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private logServ: LoggingService, private accServ: AccountService) {
    this.accServ.statusUpdated.subscribe(
      (status: string) => {
        alert(`new status ${status}`);
      }
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accServ.addAccount(accountName, accountStatus);
    // this.logServ.logStatusChange(accountStatus);
  }
}
