# Soham Shukla | Personal Portfolio 

[![Live Site](https://img.shields.io/badge/Live-sohamshukla.com-success)](https://sohamshukla.com)

## Highlights
- **Live Demo:** [sohamshukla.com](https://sohamshukla.com)
- **Tech Stack:** React, Vite, Framer Motion, JavaScript, HTML/CSS, JSON
- **Architecture:** Single Page Application (SPA) with HashRouter, modular JSON data injection, and custom CSS scroll-snapping logic.
- **Infrastructure:** CI/CD via GitHub Pages, Let's Encrypt SSL/HTTPS, and custom DNS A/CNAME routing.

## Overview
This repository holds the source code for my personal portfolio website. I built this project to showcase my engineering work—from hardware logic design to full-stack web applications—while demonstrating my ability to architect, deploy, and manage a scalable web environment.

UI elements are seperated from underlying JSON data, so the site is designed to dynamically scale and render new content as I add more content moving forward. 

## The Architecture & Deployment Process
This application was engineered with a focus on maintainability and continuous deployment. 

*   **Frontend UI:** Built with React and Vite for rapid compilation. Complex gesture animations and page transitions are handled via `framer-motion`.
*   **Virtual Routing:** Utilizes `react-router-dom` (specifically `HashRouter`) to seamlessly manage state and navigation across dynamic project routes without triggering server-side 404 errors.
*   **Automated Deployment:** Features a streamlined CI/CD pipeline. Running a custom `npm run deploy` script automatically compiles the React app and pushes production-ready assets to a `gh-pages` branch.
*   **Hosting & DNS:** Hosted on GitHub pages, strictly routed through a custom apex domain (`sohamshukla.com`) utilizing properly configured A Records and CNAME records alongside provisioned SSL certificates.

## Local Installation
To run this project locally and view the source code in action:

1. Clone the repository:
   ```bash
   git clone [https://github.com/soham-shukla/soham-persweb.git](https://github.com/soham-shukla/soham-persweb.git)
   ```
2. Navigate into the directory and install dependencies:
   ```bash
   cd soham-persweb
   npm install
   ```
3. Start the local Vite development server:
   ```bash
   npm run dev
   ```

## Bug Reporting & Feedback
*Notice something broken? I'd love to fix it!*

Whether it is a broken link, a typo, or a visual glitch on a specific mobile device, your feedback is highly appreciated. To report a bug:
1. Navigate to the **Issues** tab at the top of this repository.
2. Click **New Issue**.
3. Briefly describe the bug, what page it occurred on, and (if possible) what browser/device you are using. 

## Author & Contact
I'm **Soham Shukla**, a Computer Engineering student (Bioengineering minor) at the University of Illinois Urbana-Champaign. I love to design, solve, and learn—always cooking something up to help others and make the world just a little better off.

**For Recruiters** I am actively looking for sophomore hardware, data analysis, and software engineering roles for Spring/ Summer 2027 and forward. If my portfolio aligns with your team's needs, I would love to connect! You can contact me directly through my website or on LinkedIn:

- **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/soham-m-shukla/)
