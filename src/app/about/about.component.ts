import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="about-container">
      <h1>About BuildRight Construction</h1>
      
      <div class="about-hero">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Construction Team">
      </div>
      
      <mat-card>
        <mat-card-content>
          <h2>Our Story</h2>
          <div class="content-with-image">
            <div>
              <p>
                Founded in 1995, BuildRight Construction has been a trusted name in the construction industry for over 25 years. 
                What started as a small family business has grown into a full-service construction company with a reputation for 
                excellence and reliability.
              </p>
              <p>
                Over the years, we've completed hundreds of projects ranging from custom homes to commercial buildings, 
                always maintaining our commitment to quality craftsmanship and customer satisfaction.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1739&q=80" alt="Construction History">
          </div>
        </mat-card-content>
      </mat-card>
      
      <mat-card>
        <mat-card-content>
          <h2>Our Mission</h2>
          <div class="content-with-image reverse">
            <div>
              <p>
                At BuildRight Construction, our mission is to deliver exceptional construction services that exceed our clients' 
                expectations. We believe in building structures that stand the test of time while providing a seamless and 
                transparent construction experience for our clients.
              </p>
              <p>
                We are committed to sustainable building practices, safety on all job sites, and fostering long-term 
                relationships with our clients, subcontractors, and suppliers.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Construction Mission">
          </div>
        </mat-card-content>
      </mat-card>
      
      <mat-card>
        <mat-card-content>
          <h2>Our Team</h2>
          <div class="team-grid">
            <div class="team-member">
              <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="Team Member 1">
              <h3>John Smith</h3>
              <p>Founder & CEO</p>
            </div>
            <div class="team-member">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80" alt="Team Member 2">
              <h3>Sarah Johnson</h3>
              <p>Project Manager</p>
            </div>
            <div class="team-member">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="Team Member 3">
              <h3>Michael Brown</h3>
              <p>Lead Architect</p>
            </div>
            <div class="team-member">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80" alt="Team Member 4">
              <h3>Emily Davis</h3>
              <p>Interior Designer</p>
            </div>
          </div>
          <p>
            Our team consists of experienced project managers, skilled craftsmen, and dedicated support staff who bring 
            decades of combined experience to every project. We take pride in our work and are committed to delivering 
            the highest quality construction services.
          </p>
          <p>
            All of our team members are fully licensed, insured, and continuously trained in the latest construction 
            techniques and safety protocols to ensure we deliver the best possible results for our clients.
          </p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    
    .about-hero {
      margin-bottom: 30px;
      border-radius: 8px;
      overflow: hidden;
      height: 300px;
    }
    
    .about-hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    mat-card {
      margin-bottom: 20px;
    }
    
    h2 {
      color: #3f51b5;
      margin-bottom: 15px;
    }
    
    p {
      line-height: 1.6;
      margin-bottom: 15px;
    }
    
    .content-with-image {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    
    .content-with-image.reverse {
      flex-direction: row-reverse;
    }
    
    .content-with-image img {
      width: 40%;
      border-radius: 8px;
      object-fit: cover;
    }
    
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    
    .team-member {
      text-align: center;
    }
    
    .team-member img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    
    .team-member h3 {
      margin: 0;
      font-size: 1rem;
    }
    
    .team-member p {
      margin: 5px 0 0;
      font-size: 0.9rem;
      color: #666;
    }
    
    @media (max-width: 768px) {
      .content-with-image, .content-with-image.reverse {
        flex-direction: column;
      }
      
      .content-with-image img {
        width: 100%;
        margin-top: 15px;
      }
      
      .team-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class AboutComponent {}