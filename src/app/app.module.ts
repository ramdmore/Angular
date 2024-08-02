import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { firstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { TextUpperCase } from './shared/directive/text-uppercase.directive';
import { PhoneFormatDirective } from './shared/directive/phone-format.directive';
import { DescriptionCutter } from './shared/pipe/desc-cutter.pipe';
import { FourthComponent } from './fourth/fourth.component';
import { LikeComponent } from './like/like.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';

@NgModule({
  declarations: [
    AppComponent,
    firstComponent,
    SecondComponent,
    ThirdComponent,
    TextUpperCase,
    PhoneFormatDirective,
    DescriptionCutter,
    FourthComponent,
    LikeComponent,
    FifthComponent,
    SixthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
