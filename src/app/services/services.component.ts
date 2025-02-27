import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="services-container">
      <h1>Our Construction Services</h1>
      
      <div class="services-hero">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80" alt="Construction Services">
        <div class="services-hero-overlay">
          <h2>Quality Construction Services Since 1995</h2>
          <p>Building excellence into every project</p>
        </div>
      </div>
      
      <div class="services-grid">
        <mat-card>
          <img mat-card-image src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Residential Construction">
          <mat-card-header>
            <mat-icon mat-card-avatar>home</mat-icon>
            <mat-card-title>Residential Construction</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>
              We specialize in building custom homes that reflect your unique style and meet your family's needs. 
              Our residential construction services include:
            </p>
            <ul>
              <li>Custom Home Building</li>
              <li>Home Additions</li>
              <li>Kitchen and Bathroom Remodeling</li>
              <li>Basement Finishing</li>
              <li>Outdoor Living Spaces</li>
            </ul>
          </mat-card-content>
        </mat-card>
        
        <mat-card>
          <img mat-card-image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Commercial Construction">
          <mat-card-header>
            <mat-icon mat-card-avatar>business</mat-icon>
            <mat-card-title>Commercial Construction</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>
              We deliver high-quality commercial construction projects on time and within budget. 
              Our commercial services include:
            </p>
            <ul>
              <li>Office Buildings</li>
              <li>Retail Spaces</li>
              <li>Restaurants</li>
              <li>Warehouses</li>
              <li>Medical Facilities</li>
            </ul>
          </mat-card-content>
        </mat-card>
        
        <mat-card>
          <img mat-card-image src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Renovation & Remodeling">
          <mat-card-header>
            <mat-icon mat-card-avatar>build</mat-icon>
            <mat-card-title>Renovation & Remodeling</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>
              Transform your existing space with our expert renovation and remodeling services. 
              We specialize in:
            </p>
            <ul>
              <li>Kitchen Renovations</li>
              <li>Bathroom Remodels</li>
              <li>Whole House Renovations</li>
              <li>Historic Restorations</li>
              <li>Commercial Tenant Improvements</li>
            </ul>
          </mat-card-content>
        </mat-card>
        
        <mat-card>
          <img mat-card-image src="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" alt="Design-Build Services">
          <mat-card-header>
            <mat-icon mat-card-avatar>architecture</mat-icon>
            <mat-card-title>Design-Build Services</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>
              Our design-build approach streamlines the construction process by bringing design and construction 
              under one roof. Benefits include:
            </p>
            <ul>
              <li>Single Point of Responsibility</li>
              <li>Faster Project Delivery</li>
              <li>Cost Savings</li>
              <li>Improved Communication</li>
              <li>Higher Quality Results</li>
            </ul>
          </mat-card-content>
        </mat-card>
      </div>
      
      <div class="process-section">
        <h2>Our Construction Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Initial Consultation</h3>
              <p>We meet to discuss your vision, requirements, and budget for the project.</p>
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="Consultation">
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Design & Planning</h3>
              <p>Our team creates detailed plans and obtains necessary permits for your project.</p>
              <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80" alt="Planning">
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Construction</h3>
              <p>Our skilled team brings your project to life with quality craftsmanship.</p>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Construction">
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Completion & Handover</h3>
              <p>Final inspections are conducted and your completed project is delivered.</p>
              <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Completion">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .services-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    
    .services-hero {
      position: relative;
      height: 300px;
      margin-bottom: 40px;
      border-radius: 8px;
      overflow: hidden;
    }
    
    .services-hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .services-hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      text-align: center;
      padding: 20px;
    }
    
    .services-hero-overlay h2 {
      color: white;
      margin-bottom: 10px;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }
    
    mat-card {
      height: 100%;
    }
    
    mat-card-image {
      height: 200px;
      object-fit: cover;
    }
    
    mat-card-title {
      margin-bottom: 15px;
    }
    
    ul {
      padding-left: 20px;
    }
    
    li {
      margin-bottom: 5px;
    }
    
    .process-section {
      margin-top: 40px;
    }
    
    .process-section h2 {
      text-align: center;
      margin-bottom: 30px;
      color: #3f51b5;
    }
    
    .process-steps {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    
    .process-step {
      display: flex;
      gap: 20px;
    }
    
    .step-number {
      background-color: #3f51b5;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: bold;
      flex-shrink: 0;
    }
    
    .step-content {
      flex: 1;
    }
    
    .step-content h3 {
      margin-top: 0;
      color: #3f51b5;
    }
    
    .step-content img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-top: 10px;
    }
    
    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
      
      .services-hero {
        height: 200px;
      }
    }
  `]
})
export class ServicesComponent {}