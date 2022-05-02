import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { TextAreaComponent } from './text-area/text-area.component';

@NgModule({
  declarations: [InputComponent, ModalComponent, TextAreaComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, ModalComponent, TextAreaComponent],
})
export class SharedModule {}
