import { Component, OnInit } from '@angular/core';
import { sender } from '../shared/models/sender-interface';
import { map } from 'rxjs/operators';
import { SenderService } from '../shared/services/sender.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  dataSource: sender[];

  constructor(private ProjectsService: SenderService) {
  }

  ngOnInit() {
    this.dataSource = this.ProjectsService.listProjects().pipe(
      map((data: HttpResponse<sender[]>) => data.body)
    );
  }

}
