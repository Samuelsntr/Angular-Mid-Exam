import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { SettingComponent } from './_components/setting/setting.component';
import { LayoutComponent } from './_components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './_components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    SettingComponent,
    LayoutComponent,
    PostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
