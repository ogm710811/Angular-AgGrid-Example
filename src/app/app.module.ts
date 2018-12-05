import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent ],
	// withComponents method that you call on the AgGridModule is used to declare Angular components used inside ag-Grid
	imports: [ BrowserModule, AgGridModule.withComponents(null) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
