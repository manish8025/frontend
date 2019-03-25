import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/model/Inventory.model';
import { InventoryserviceService } from 'src/app/service/inventoryservice.service';
import { SensorDataServiceService } from 'src/app/service/sensor-data-service.service';
import { strictEqual } from 'assert';
import { SensorData } from 'src/app/model/sendorData.model';
import { element } from '@angular/core/src/render3';
import { Invdisplay } from 'src/app/model/invdisplay.model';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-inventory-display',
  templateUrl: './inventory-display.component.html',
  styleUrls: ['./inventory-display.component.css']
})
export class InventoryDisplayComponent implements OnInit {
  stock: Number = 40;

  color = 'warn';
  mode = 'determinate';
  value : Number =0;
  bufferValue = 100;
  inventories : any;
  displayedColumns: string[] = ['prodName','stockStatus','invalidItemPresent'];
  constructor(private inventory : InventoryserviceService, private sesordataservice : SensorDataServiceService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-error.svg'));
  }

    ngOnInit() {  
      setInterval(() => {
       this.inventory.getInventoryFromSesor().subscribe((res : any)=>{
        this.inventories = res.output.response;
         })
       }, 1000);
      
    }
}
