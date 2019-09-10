import { Component, OnInit } from '@angular/core';
import { RsswebService } from '@app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private search_input: string;
  private loading: boolean = false;
  feeds: any = undefined;
  constructor(private ws: RsswebService) {}

  ngOnInit() {}

  get_feeds() {
    this.ws.get_feeds(this.search_input).subscribe(d => {
      this.feeds = d;
    });
  }

  clear() {
    this.search_input = undefined;
    this.feeds = undefined;
  }
}
