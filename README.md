## 🚀 Getting Started

### Prerequisites  
- Node.js (recommend v16 or later)  
- npm (comes with Node)  

### Installation & Setup  
1. Clone the repository  
bash
git clone https://github.com/domricamora/orchard.git
Navigate into the project directory

bash
Copy code
cd orchard
Install dependencies

bash
Copy code
npm install
Available Scripts
Start development server

bash
Copy code
npm run start
Launches a local dev server (with live reloading) so you can view the website locally.

Build for production

bash
Copy code
npm run build
Produces a bundled version of the website in the dist/ folder, ready for deployment.

📁 Project Structure
bash
Copy code
orchard/

├── dist/                   # Built output (auto generated)

├── src/                    # Source files

│   ├── images/             # Image assets

│   ├── js/                 # JavaScript modules

│   ├── styles/             # CSS / SCSS files

│   └── index.html          # Entry HTML

├── package.json            # Project metadata & scripts

├── webpack.config.js       # Webpack config for bundling

└── README.md               # This documentation

🧰 Build Tools & Technologies
Webpack for bundling JS/CSS/assets
Modern ES6+ JavaScript
CSS (or SCSS) for styling
Responsive layout supporting mobile & desktop
Image modal functionality for improved UX

🎯 Deployment
After running npm run build, you can deploy the contents of the dist/ directory to any static web-hosting platform (e.g., GitHub Pages, Netlify, Vercel).

🛠 Troubleshooting
If npm install fails, ensure Node.js is updated.

If build fails, try:

bash
Copy code
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
On npm run start, if the browser doesn't open automatically, manually navigate to the URL printed in the console (often http://localhost:8080).
