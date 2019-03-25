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
        productId: ['', Validators.required],
        unitWeight: ['', Validators.required],
        prodName :['', Validators.required],
        threshold :['', Validators.required]
      });
    
  
   }

  ngOnInit() {
    
  }

  updateInventory() {
  
    this.inventoryservice.updateShelfValueInSensor(this.updateForm.value).subscribe(() => {
      this.snackBar.open('Shelf updated successfully', 'OK', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
      this.updateForm.patchValue(
        {
          productId: [''],
          unitWeight: [''],
          prodName :[''],
          threshold :['']
        }
      )
    });
    
  }

}
