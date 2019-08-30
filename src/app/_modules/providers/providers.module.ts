import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatTableModule, MatFormFieldModule,MatPaginatorModule, MatInputModule,MatSelectModule,
  MatDividerModule,MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, MatTableModule, MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule, 
    MatPaginatorModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    DragDropModule,
    MatDividerModule,
    MatCardModule
    
  
  ],
  exports: [FormsModule, MatButtonModule, MatTableModule, MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    DragDropModule,
    MatDividerModule,
    MatCardModule
    
  ]
})
export class ProvidersModule { }

