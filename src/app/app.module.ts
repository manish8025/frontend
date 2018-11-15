import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SensordataComponent } from './component/sensordata/sensordata.component';
import { InventoryserviceService } from './service/inventoryservice.service';
import { InventoryDisplayComponent } from './component/inventory-display/inventory-display.component';
import { UpdateInventoryComponent } from './component/update-inventory/update-inventory.component';
import { SensorDataServiceService } from './service/sensor-data-service.service';

const routes: Routes = [
{path:'inventory', component:SensordataComponent},
{path:'', component:InventoryDisplayComponent},
{path:'updateInventory', component:UpdateInventoryComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SensordataComponent,
    InventoryDisplayComponent,
    UpdateInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatProgressBarModule,
    MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [InventoryserviceService,SensorDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
