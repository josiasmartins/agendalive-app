import { Component, OnInit } from '@angular/core';
import { Live } from './../../shared/model/live.model';
import { LiveService } from './../../shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious: Live[];
  livesNext: Live[];

  constructor(
    public liveServer: LiveService
  ) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.liveServer.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      console.log(this.livesPrevious)
    });

    this.liveServer.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
      console.log(this.livesPrevious);
    })
  }
}
