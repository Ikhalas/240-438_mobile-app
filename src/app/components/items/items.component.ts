import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../../models/items';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  @Input() items: Items;

  constructor() { }

  ngOnInit() {}

}
