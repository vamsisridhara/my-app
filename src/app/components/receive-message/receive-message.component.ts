import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';
import { MessageService } from '../../api/message-service.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
@Component({
  selector: 'app-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.scss']
})
export class ReceiveMessageComponent implements OnInit, OnDestroy {
  message: any;
  // subscription: Subscription;

  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.messageService.getMessage()
    .pipe(
      untilDestroyed(this)
    )
    .subscribe(message => { this.message = message; });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    // // unsubscribe to ensure no memory leaks
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }

}
