import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent
  ],
  template: `
    <div class="app-container">
      <mat-toolbar color="primary">
        <button mat-icon-button (click)="sidenav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
        <span>BuildRight Construction</span>
        <span class="spacer"></span>
        <div class="desktop-menu">
          <a mat-button routerLink="/">Home</a>
          <a mat-button routerLink="/about">About</a>
          <a mat-button routerLink="/services">Services</a>
          <a mat-button routerLink="/contact">Contact</a>
        </div>
      </mat-toolbar>

      <mat-sidenav-container>
        <mat-sidenav #sidenav mode="over">
          <mat-nav-list>
            <a mat-list-item routerLink="/" (click)="sidenav.close()">Home</a>
            <a mat-list-item routerLink="/about" (click)="sidenav.close()">About</a>
            <a mat-list-item routerLink="/services" (click)="sidenav.close()">Services</a>
            <a mat-list-item routerLink="/contact" (click)="sidenav.close()">Contact</a>
          </mat-nav-list>
        </mat-sidenav>
        <mat-sidenav-content>
          <div class="content-section">
            <router-outlet></router-outlet>
          </div>
          <footer class="footer">
            <p>© 2025 BuildRight Construction. All rights reserved.</p>
          </footer>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    
    mat-sidenav-container {
      flex: 1;
    }
    
    .spacer {
      flex: 1 1 auto;
    }
    
    .desktop-menu {
      display: none;
    }
    
    @media (min-width: 768px) {
      .desktop-menu {
        display: block;
      }
      
      button[mat-icon-button] {
        display: none;
      }
    }
  `]
})
export class AppComponent {
  title = 'BuildRight Construction';
}