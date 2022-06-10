import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [
    MatTooltipModule,
    MatSlideToggleModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule
  ],
  imports: [
    MatTooltipModule,
    MatSlideToggleModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule
  ],
})
export class MaterialModule {}
