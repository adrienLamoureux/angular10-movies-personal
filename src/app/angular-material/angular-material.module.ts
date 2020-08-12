import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
   imports: [
      MatIconModule,
      MatToolbarModule, 
      MatCardModule,
      MatInputModule,
      MatButtonModule
   ],
   exports: [
      MatIconModule,
      MatToolbarModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule
   ]
})
export class AngularMaterialModule { }