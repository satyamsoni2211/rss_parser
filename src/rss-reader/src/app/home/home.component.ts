import { Component, OnInit } from '@angular/core';
import { RsswebService } from '@app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public success: boolean = false;
  public error: boolean = false;
  public search_input: string;
  public loading: boolean = false;
  feeds: any = undefined;
  constructor(private ws: RsswebService) {}

  ngOnInit() {}

  get_feeds() {
    this.loading = true;
    this.success = false;
    this.error = false;
    this.ws.get_feeds(this.search_input).subscribe(
      d => {
        this.feeds = d;
        this.loading = false;
        this.success = true;
      },
      e => {
        this.error = true;
        this.loading = false;
      }
    );
  }

  clear() {
    this.search_input = undefined;
    this.feeds = undefined;
    this.success = false;
    this.error = false;
  }

  close_success() {
    this.success = false;
  }

  close_error() {
    this.error = false;
  }
}
