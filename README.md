# ClinicHub - Your Modern Healthcare Booking Platform 🩺✨

**ClinicHub** revolutionizes how patients connect with healthcare providers through a fast, intuitive, and transparent platform. Whether you're booking appointments, viewing doctor profiles, or managing your healthcare journey, HealthBook provides everything you need in the palm of your hand.  

## 🎯 Key Features  

✅ **Smart Doctor Search** - Find healthcare professionals by specialty, location, availability, or symptoms.  
✅ **Real-Time Bookings** - Instantly secure bookings without long phone calls.   
✅ **Verified Doctors** – 2,500+ thoroughly vetted practitioners ensure trust and reliability.  
✅ **Patient Reviews** – Ratings and authentic feedback to make informed decisions.  
✅ **Appointment Management Dashboard** - Seamlessly track past and upcoming visits.  
✅ **Smart Notifications** – Automated reminders for appointments.  
✅ **Responsiveness** – Flawless across devices with smooth dark mode support.  
✅ **Interactive UX** – Chatbots, scroll-to-top, and animated transitions for a delightful experience.  

---

## 🌿 Live Demo  
🚀 Try it out here: [ClinicHub - Live Application](https://clinic-hub-booking.netlify.app/)  

---

## 💻 Tech Stack  

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)  
![TypeScript](https://img.shields.io/badge/TypeScript-strong-blue?style=for-the-badge&logo=typescript&logoColor=white)  
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)  
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🛠 Project Structure  

```
ClinicHubDoctorReservation/
├─ README.md                     
├─ ClinicHubMockup.png           
├─ package.json                  
├─ pnpm-lock.yaml                 
├─ tsconfig.json                  
├─ next.config.mjs                
├─ postcss.config.mjs             
├─ components.json                
├─ app/                          
│  ├─ layout.tsx                  
│  ├─ client-layout.tsx          
│  ├─ globals.css                
│  ├─ loading.tsx                 
│  ├─ page.tsx                   
│  ├─ about/                      
│  │  ├─ page.tsx                
│  │  └─ loading.tsx             
│  ├─ contact/                   
│  │  ├─ page.tsx                
│  │  └─ loading.tsx             
│  ├─ login/                     
│  │  ├─ page.tsx                 
│  │  └─ loading.tsx              
│  ├─ signup/                    
│  │  ├─ page.tsx                 
│  │  └─ loading.tsx             
│  ├─ dashboard/                
│  │  ├─ page.tsx                 
│  │  └─ loading.tsx              
│  ├─ search/                     
│  │  ├─ page.tsx                 
│  │  └─ loading.tsx              
│  ├─ booking/                    
│  │  └─ confirmation/            
│  │     ├─ page.tsx              
│  │     └─ loading.tsx           
│  └─ doctor/                     
│     └─ [id]/                    
│        ├─ page.tsx              
│        └─ loading.tsx         
├─ components/                    
│  ├─ navbar.tsx                  
│  ├─ footer.tsx                  
│  ├─ hero-section.tsx          
│  ├─ search-box.tsx              
│  ├─ stats-section.tsx           
│  ├─ features-section.tsx        
│  ├─ symptom-checker.tsx         
│  ├─ nearby-doctors.tsx         
│  ├─ trust-badges.tsx           
│  ├─ reviews-section.tsx        
│  ├─ animated-cta.tsx           
│  ├─ chatbot.tsx                
│  ├─ scroll-to-top.tsx           
│  ├─ theme-provider.tsx         
│  ├─ theme-toggle.tsx           
│  ├─ login-form.tsx              
│  ├─ signup-form.tsx             
│  ├─ appointment-card.tsx        
│  ├─ profile-info.tsx           
│  ├─ doctor-card.tsx             
│  ├─ doctor-list.tsx             
│  ├─ doctor-profile-header.tsx   
│  ├─ search-filters.tsx          
│  ├─ booking-form.tsx            
│  ├─ booking-summary.tsx         
│  ├─ availability-calendar.tsx   
│  ├─ progress-indicator.tsx      
│  ├─ quick-booking-modal.tsx     
│  └─ ui/                         
├─ hooks/                         
│  ├─ use-mobile.ts              
│  └─ use-toast.ts                
├─ lib/                           
│  ├─ mock-data.ts                
│  └─ utils.ts                    
├─ public/                        
│  ├─ placeholder.svg            
│  ├─ placeholder.png/.jpg        
│  ├─ placeholder-logo.png/svg   
│  ├─ placeholder-user.jpg        
│  ├─ female-doctor-professional.jpg  
│  ├─ female-doctor.jpg
│  ├─ female-pediatrician.png
│  ├─ female-psychiatrist-professional.jpg
│  ├─ male-orthopedic-doctor.png
│  ├─ professional-male-doctor.png
│  ├─ modern-healthcare-team-collaboration.jpg
│  ├─ professional-woman.png
│  ├─ man-business.jpg
│  ├─ man-casual.jpg
│  ├─ man-professional.jpg
│  └─ smiling-woman.png
└─ styles/                        
   └─ globals.css                 
```

---

## 🚀 Getting Started  

✨ Clone the repo and set it up locally:  

```bash
git clone https://github.com/mohammedRaafatt/ClinicHub-Doctor-Reservation.git
cd ClinicHub-Doctor-Reservation
```

### Prerequisites  

- **Node.js** v20+  
- Package manager: `pnpm` (recommended) or `npm`  

### Install Dependencies  

```bash
pnpm install
```

### Start Development Server  

```bash
pnpm dev
# or
npm run dev
```

Open **http://localhost:3000** in your browser.  

### Build and Run  

```bash
pnpm build
pnpm start
```

---

## 🔐 Authentication  

**Current Implementation**: Mock authentication simulating a lightweight session flow. Replace `lib/mock-data.ts` and session logic with a real backend for production.  

### Backend Integration  

Plug in your API for full-stack capabilities:  
- Replace mock data arrays with REST or GraphQL API calls.  
- Integrate `NextAuth` or other solutions for real user authentication.  

---

## 🎨 Design Highlights  

🖼️  **Accessible, Healthcare-Focused Branding**: Light/dark themes for any lighting condition.  
📱 **Mobile-First Design**: Responsive grids and scalable layouts.  
📊 **Data-Driven UI**: Reviews, user metrics, and charts across dashboards.  

---

## ✨ Future Enhancements  

🔥 We're continuously evolving ClinicHub! Coming soon:  
- Telemedicine integration for video consultations.  
- AI-powered symptom checker.  
- Medical record management and document uploads.  
- Health insurance compatibility.

---

## 🤝 Connect With Me

<p align="center">
  <a href="mailto:m.raafatgaber@gmail.com">
    <img src="https://img.shields.io/badge/Email-m.raafatgaber@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Badge">
  </a>
  <a href="https://www.linkedin.com/in/mohammed-raafat-swe/">
    <img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Raafat-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge">
  </a>
  <a href="https://github.com/mohammedRaafatt">
    <img src="https://img.shields.io/badge/GitHub-mohammedRaafatt-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge">
  </a>
  <a href="https://www.instagram.com/muhammad_raafat_/">
    <img src="https://img.shields.io/badge/Instagram-muhammad__raafat__-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram Badge">
  </a>
  <a href="https://www.facebook.com/profile.php?id=100004131767214">
    <img src="https://img.shields.io/badge/Facebook-Mohammed%20Raafat-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook Badge">
  </a>
</p>

---

<p align="center">
  🌟 <em>Thanks for visiting my project — let’s build something amazing together!</em> 🌟
</p>

<p align="center">
  <img src="https://github.com/JayantGoel001/JayantGoel001/blob/master/WEBP/footer.webp" alt="Footer Banner"/>
</p>
