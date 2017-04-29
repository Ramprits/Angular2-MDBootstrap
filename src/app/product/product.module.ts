import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { Productroutes } from 'app/product/product.router';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule } from '@progress/kendo-angular-grid';
@NgModule({
  imports: [
    CommonModule,
    DateInputsModule,
    GridModule,
    RouterModule.forChild(Productroutes)
  ],
  declarations: [ProductComponent]
})
// tslint:disable-next-line:eofline
export class ProductModule { }
export interface IProduct {
     ProductID: number;
     Name: string;
     ProductNumber: string;
     Color: string;
     SafetyStockLevel: string;
     ReorderPoint: string;
     StandardCost: string;
     ListPrice: string;
     ModifiedDate: string;
}