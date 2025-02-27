import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule, RouterModule],
  template: `
    <div class="home-container">
      <div class="hero-section" [style.background-image]="'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)'">
        <div class="hero-overlay">
          <h1>BuildRight Construction</h1>
          <p>Building your dreams from the ground up</p>
          <button mat-raised-button color="primary" routerLink="/contact">Get a Quote</button>
        </div>
      </div>
      
      <mat-divider></mat-divider>
      
      <h2 class="section-title">Our Core Services</h2>
      <div class="card-container">
        <mat-card>
          <img mat-card-image src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Residential Construction">
          <mat-card-header>
            <mat-card-title>Residential Construction</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>
              Custom homes, renovations, and additions designed to meet your family's needs and lifestyle.
            </p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary" routerLink="/services">Learn More</button>
          </mat-card-actions>
        </mat-card>
        
        <mat-card>
          <img mat-card-image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Commercial Projects">
          <mat-card-header>
            <mat-card-title>Commercial Projects</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>
              Office buildings, retail spaces, and industrial facilities built to the highest standards of quality.
            </p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary" routerLink="/services">Learn More</button>
          </mat-card-actions>
        </mat-card>
        
        <mat-card>
          <img mat-card-image src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Renovation & Remodeling">
          <mat-card-header>
            <mat-card-title>Renovation & Remodeling</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>
              Transform your existing space with our expert renovation and remodeling services.
            </p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary" routerLink="/services">Learn More</button>
          </mat-card-actions>
        </mat-card>
      </div>
      
      <div class="projects-section">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div class="project-item">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Luxury Home">
            <div class="project-overlay">
              <h3>Luxury Home</h3>
              <p>Malibu, CA</p>
            </div>
          </div>
          <div class="project-item">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Office Complex">
            <div class="project-overlay">
              <h3>Office Complex</h3>
              <p>Downtown LA</p>
            </div>
          </div>
          <div class="project-item">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Modern Residence">
            <div class="project-overlay">
              <h3>Modern Residence</h3>
              <p>San Diego, CA</p>
            </div>
          </div>
          <div class="project-item">
            <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Shopping Mall">
            <div class="project-overlay">
              <h3>Shopping Mall</h3>
              <p>Orange County, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .hero-section {
      position: relative;
      height: 500px;
      background-size: cover;
      background-position: center;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
    }
    
    .hero-overlay {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 40px;
      border-radius: 8px;
      width: 80%;
      max-width: 600px;
    }
    
    .hero-section h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: white;
    }
    
    .hero-section p {
      font-size: 1.2rem;
      margin-bottom: 30px;
      color: white;
    }
    
    .section-title {
      text-align: center;
      margin: 40px 0 20px;
    }
    
    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    
    mat-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    mat-card-content {
      flex-grow: 1;
    }
    
    img[mat-card-image] {
      height: 200px;
      object-fit: cover;
    }
    
    .projects-section {
      padding: 20px;
      margin-bottom: 40px;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
    
    .project-item {
      position: relative;
      height: 250px;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    .project-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .project-item:hover img {
      transform: scale(1.05);
    }
    
    .project-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.7));
      color: white;
      padding: 20px;
    }
    
    .project-overlay h3 {
      margin: 0 0 5px 0;
    }
    
    .project-overlay p {
      margin: 0;
      font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
      .hero-section {
        height: 400px;
      }
      
      .hero-overlay {
        width: 90%;
        padding: 20px;
      }
      
      .hero-section h1 {
        font-size: 2rem;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {}