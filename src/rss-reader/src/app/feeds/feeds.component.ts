import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  @Input() public feeds: any;
  public feed: any;
  public entries: any;
  constructor() {}

  ngOnInit() {
    this.feed = this.feeds.feed;
    this.entries = this.feeds.entries;
  }
}
