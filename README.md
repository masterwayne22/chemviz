⚗️ ChemViz: Industrial Parameter Visualizer
FOSSEE Screening Task (IIT Bombay) | Hybrid Web + Desktop Application

🚀 Project Essentials
Live Link: https://eloquent-unicorn-ef2d76.netlify.app/ 

GitHub repo link:https://github.com/masterwayne22/chemviz

Architecture: Unified Python Backend ↔ Dual JavaScript/Python Frontends.

🛠️ The Tech Stack
Backend Engine:

Django & DRF: Centralized REST API for all clients.

Pandas: Real-time CSV processing and statistical analytics.

SQLite: Reliable storage for the last 5 dataset uploads.

Web Frontend:

React 18 + Vite: High-performance dashboard rendering.

Chart.js: Interactive visualization of equipment parameters.

Tailwind CSS: Custom "Industrial Control Panel" Design System.

Desktop Frontend:

PyQt5: Native desktop interface for offline-first monitoring.

Matplotlib: Scientific-grade plotting for equipment trends.

⚡ Core Functionalities
CSV Data Processing: Automated parsing of Name, Type, Flowrate, Pressure, and Temperature.

Analytics API: Calculation of global averages and equipment type distribution.

Smart History: Persistence layer to toggle between the 5 most recent uploads.

Industrial UI: High-contrast dark mode optimized for technical environments.

PDF Reporting: (Implemented/Planned) Summary generation for equipment logs.

📂 System Architecture
📂 backend/ — Django API logic and Pandas analytics.

📂 frontend-web/ — React dashboard source code.

📂 frontend-desktop/ — PyQt5 native application scripts.

📄 requirements.txt — Full Python dependency manifest.

📄 sample_equipment_data.csv — Official testing dataset.

⚙️ Installation & Execution
1. Backend:

cd backend

pip install -r requirements.txt

python manage.py runserver

2. Web App:

cd frontend-web

npm install && npm run dev

3. Desktop App:

cd frontend-desktop

python main.py

👤 Author & Submission
Developer: Krishiv Sarva

Target: FOSSEE Internship Selection 2026

License: MIT Open Source
