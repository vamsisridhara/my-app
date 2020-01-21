import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../api/message-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Message Component to recieve message Component!');
  }

  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }
  ngOnInit() { }
}
