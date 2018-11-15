import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SensorData } from 'src/app/model/sendorData.model';
import { MatSnackBar } from '@angular/material';
import { InventoryserviceService } from 'src/app/service/inventoryservice.service';


@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {

  id: String;
  sensorData: any = {};
  updateForm: FormGroup;
  constructor( private inventoryservice: InventoryserviceService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
      this.updateForm = this.fb.group({
        shelfId: ['', Validators.required],
        weight: ['', Validators.required]
      });
    
  
   }

  ngOnInit() {
    
  }

  updateInventory(shelfId, weight) {
    this.inventoryservice.updateShelfValueInSensor(shelfId,weight).subscribe(() => {
      this.snackBar.open('Shelf updated successfully', 'OK', {
        duration: 3000
      });
    });
    
  }

}
