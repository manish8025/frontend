import { Component, OnInit } from '@angular/core';
import { InventoryserviceService } from 'src/app/service/inventoryservice.service';
import { Inventory } from 'src/app/model/Inventory.model';


@Component({
  selector: 'app-sensordata',
  templateUrl: './sensordata.component.html',
  styleUrls: ['./sensordata.component.css']
})
export class SensordataComponent implements OnInit {
  inventories : Inventory[];
  displayedColumns: string[] = ['productid','prodName','threshold','shelfIds'];
  constructor(private inventory : InventoryserviceService) {
   }
  ngOnInit() {
      this.inventory.getInventoryFromSesor().subscribe((res : any)=> {
            this.inventories = res.output.response;
        });
      
    }
}
