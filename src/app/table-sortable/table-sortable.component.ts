import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { SortableHeaderDirective } from './sortable-header.directive';

@Component({
  selector: 'app-table-sortable',
  templateUrl: './table-sortable.component.html',
  styleUrls: ['./table-sortable.component.css']
})
export class TableSortableComponent {
  @ViewChildren(SortableHeaderDirective) headers: QueryList<SortableHeaderDirective>;
}
