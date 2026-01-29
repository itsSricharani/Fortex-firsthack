Project Name: Nyaymarg
Tagline: Making Legal Access Simple and Understandable
Hackathon: Fortex Hackathon

Nyaymarg is a web-based platform designed to simplify legal communication and improve access to reliable legal assistance. The platform enables users to understand complex legal notices in simple regional language and connect with nearby legal professionals through a unified interface.

The project focuses on empowering semi-literate and economically weaker sections of society by reducing fear, misinformation, and dependency on unverified intermediaries.

👥 Team Members
Name	Role
Yash Jaiswal	Frontend Developer
Anusuya Chakraborty	UI/UX Designer & Presentation Lead
Sricharni Vemparala	Backend Developer
Aditya Negi	Security & CAPTCHA Designer

❗ Problem Statement
In India, a large portion of the population lacks sufficient legal awareness and formal education. When individuals receive legal notices, the complex language and legal terminology often create fear and confusion.

This leads to:

Delayed or incorrect responses

Dependence on middlemen

Increased risk of exploitation

Financial and social loss

Additionally, many people struggle to identify genuine legal professionals, making them vulnerable to scams and misinformation.

💡 Proposed Solution

Nyaymarg provides a simple, accessible, and secure digital platform that helps users understand legal documents and connect with legitimate lawyers.

Users can upload legal notices, which are processed using AI-based summarization and translated into their preferred regional language. The system also offers voice-based output for better accessibility.

By using location services, the platform helps users identify nearby legal professionals and initiate contact without relying on unverified sources.

⭐ Key Features

Upload legal notices for processing

AI-powered summarization and simplification

Multilingual output in regional languages

Voice-based reading of summarized content

Location-based lawyer discovery

CAPTCHA-based security verification

Mobile-responsive user interface

🏗️ System Architecture

Nyaymarg follows a modular client-server architecture:

User
  ↓
Frontend (HTML/CSS/JS)
  ↓
Backend (Python Server)
  ↓
AI API / Data Source
  ↓
Processed Response
  ↓
User Interface

Architecture Components

Frontend manages user interaction and document upload

Backend handles data processing and API communication

AI API performs summarization and language translation

Dataset module provides lawyer information

This design ensures scalability, flexibility, and ease of future integration.

⚙️ Technology Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	Python
AI API	Arcaa AI (Trinity Mini Model)
Data Source	Curated JSON Dataset
Hosting	Netlify (Frontend), Render (Backend)
Tools	GitHub, VS Code
🔌 API and Data Integration
AI Summarization

Nyaymarg integrates the Arcaa AI Trinity Mini model for real-time legal document summarization and language translation. Uploaded notices are processed through the API and returned in simplified, user-friendly form.

Lawyer Information Source

The platform currently uses a curated real-world dataset stored in JSON format containing verified lawyer details collected from publicly available sources.

Commercial location-based APIs such as Google Maps and similar platforms were evaluated. However, due to high cost and access limitations, they were not feasible for student-level prototyping within the hackathon timeline.

Therefore, a dataset-based approach was implemented to ensure stable and reliable performance during demonstrations. The backend architecture is designed to support seamless integration with live APIs in future deployments.

🔄 Implementation Workflow

User accesses the Nyaymarg platform.

User uploads a legal notice.

Frontend sends the document to the backend server.

Backend invokes the AI summarization API.

Simplified and translated content is received.

Voice module generates audio output.

Location access is requested with user permission.

Nearby lawyers are retrieved from the dataset.

Results are displayed to the user.

🚧 Challenges Faced

Integration of third-party AI services

Managing API latency and reliability

Structuring and validating real-world datasets

Ensuring mobile responsiveness

Handling multiple languages

Development under time constraints

📊 Results and Outcomes

Successful implementation of live AI-based summarization

Functional multilingual and voice output system

Responsive UI for mobile and desktop devices

Reliable location-based lawyer search using curated data

Secure access using CAPTCHA verification

The system performs consistently during prototype demonstrations.

🚀 Future Scope

Integration with official government legal databases

Live API-based lawyer verification

Secure digital document storage

Mobile application development

AI-powered legal consultation chatbot

Voice-based query support

Expansion to additional regional languages

📌 Conclusion

Nyaymarg demonstrates how artificial intelligence and location-based services can be combined to improve legal awareness and accessibility in India.

By simplifying legal communication and enabling direct access to verified professionals, the platform reduces fear, misinformation, and dependency on intermediaries.

The project serves as a strong foundation for future development into a scalable legal assistance ecosystem.

🔗 Project Links

GitHub Repository:https://github.com/itsSricharani/Fortex-firsthack.git

Live Website: https://nyaymaarg.netlify.app/