import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatIconModule
  ],
  template: `
    <div class="contact-container">
      <h1>Contact BuildRight Construction</h1>
      
      <div class="contact-layout">
        <mat-card class="contact-form-card">
          <img mat-card-image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Construction Contact">
          <mat-card-content>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <mat-form-field class="full-width">
                <mat-label>Name</mat-label>
                <input matInput formControlName="name" required>
                <mat-error *ngIf="contactForm.get('name')?.hasError('required')">
                  Name is required
                </mat-error>
              </mat-form-field>
              
              <mat-form-field class="full-width">
                <mat-label>Email</mat-label>
                <input matInput formControlName="email" required type="email">
                <mat-error *ngIf="contactForm.get('email')?.hasError('required')">
                  Email is required
                </mat-error>
                <mat-error *ngIf="contactForm.get('email')?.hasError('email')">
                  Please enter a valid email address
                </mat-error>
              </mat-form-field>
              
              <mat-form-field class="full-width">
                <mat-label>Phone</mat-label>
                <input matInput formControlName="phone" required>
                <mat-error *ngIf="contactForm.get('phone')?.hasError('required')">
                  Phone number is required
                </mat-error>
              </mat-form-field>
              
              <mat-form-field class="full-width">
                <mat-label>Project Type</mat-label>
                <mat-select formControlName="projectType" required>
                  <mat-option value="residential">Residential Construction</mat-option>
                  <mat-option value="commercial">Commercial Construction</mat-option>
                  <mat-option value="renovation">Renovation & Remodeling</mat-option>
                  <mat-option value="design">Design-Build Services</mat-option>
                  <mat-option value="other">Other</mat-option>
                </mat-select>
                <mat-error *ngIf="contactForm.get('projectType')?.hasError('required')">
                  Project type is required
                </mat-error>
              </mat-form-field>
              
              <mat-form-field class="full-width">
                <mat-label>Message</mat-label>
                <textarea matInput formControlName="message" rows="6" required placeholder="Please describe your project"></textarea>
                <mat-error *ngIf="contactForm.get('message')?.hasError('required')">
                  Message is required
                </mat-error>
              </mat-form-field>
              
              <button mat-raised-button color="primary" type="submit" [disabled]="contactForm.invalid">
                Request a Quote
              </button>
            </form>
          </mat-card-content>
        </mat-card>
        
        <div class="contact-info-section">
          <mat-card class="contact-info">
            <mat-card-content>
              <h2>Contact Information</h2>
              <div class="info-item">
                <mat-icon>location_on</mat-icon>
                <p><strong>Address:</strong> 123 Construction Way, Building City, CA 90210</p>
              </div>
              <div class="info-item">
                <mat-icon>email</mat-icon>
                <p><strong>Email:</strong> info&#64;buildright.example.com</p>
              </div>
              <div class="info-item">
                <mat-icon>phone</mat-icon>
                <p><strong>Phone:</strong> (555) 123-4567</p>
              </div>
              <div class="info-item">
                <mat-icon>access_time</mat-icon>
                <p><strong>Hours:</strong> Monday - Friday: 7am - 5pm</p>
              </div>
            </mat-card-content>
          </mat-card>
          
          <mat-card class="map-card">
            <mat-card-content>
              <h2>Our Location</h2>
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1733&q=80" alt="Map Location" class="map-image">
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    
    .contact-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .contact-form-card, .contact-info-section {
      height: 100%;
    }
    
    .contact-info-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .full-width {
      width: 100%;
      margin-bottom: 15px;
    }
    
    mat-card {
      margin-bottom: 20px;
    }
    
    .contact-info {
      flex: 1;
    }
    
    h2 {
      color: #3f51b5;
      margin-bottom: 15px;
    }
    
    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    
    .info-item mat-icon {
      margin-right: 10px;
      color: #3f51b5;
    }
    
    .map-card {
      flex: 2;
    }
    
    .map-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 4px;
    }
    
    img[mat-card-image] {
      height: 200px;
      object-fit: cover;
    }
    
    @media (max-width: 768px) {
      .contact-layout {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      projectType: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      // In a real application, you would send this data to a server
      console.log(this.contactForm.value);
      
      this.snackBar.open('Your quote request has been submitted! We\'ll contact you shortly.', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      
      this.contactForm.reset();
    }
  }
}