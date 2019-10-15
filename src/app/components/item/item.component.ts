import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { InAppBrowserObject } from ' @ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Output() toOpen = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {}

  openPage(url: string) {
    this.toOpen.emit(url);
    }

}
