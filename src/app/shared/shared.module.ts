import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialNamePipe } from './pipes/initial-name.pipe';

@NgModule({
  declarations: [InitialNamePipe],
  imports: [CommonModule],
  exports: [InitialNamePipe],
})
export class SharedModule {}
