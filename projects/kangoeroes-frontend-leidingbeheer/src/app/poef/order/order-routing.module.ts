import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderListComponent } from './pages/order-list/order-list.component';

const routes: Routes = [
    {
        'path': '',
        'component': OrderListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule { }
