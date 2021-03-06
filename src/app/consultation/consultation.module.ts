import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatStepperModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { ConsultationPageRoutingModule } from './consultation-routing.module';

import { ConsultationPage } from './consultation.page';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    IonicModule,
    ConsultationPageRoutingModule
  ],
  declarations: [ConsultationPage]
})
export class ConsultationPageModule {}
