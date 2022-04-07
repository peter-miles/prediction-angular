import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateTeamComponent } from './create-team/create-team.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { TableSortableComponent } from './table-sortable/table-sortable.component';
import { SortableHeaderDirective } from './table-sortable/sortable-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateTeamComponent,
    ViewTeamComponent,
    ViewPlayerComponent,
    TableSortableComponent,
    SortableHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
