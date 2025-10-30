# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# Portfolio React Application

This is a React TypeScript conversion of the original single-page HTML portfolio website for Harkit Singh Chhabra.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and TypeScript
- **Component-Based**: Organized into reusable, maintainable components
- **State Management**: Uses React hooks for state management
- **Responsive Design**: Mobile-first design that works on all devices
- **Email Integration**: Contact form integrated with EmailJS
- **Project Filtering**: Dynamic filtering for portfolio projects
- **Smooth Navigation**: Single-page application with smooth transitions

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   ├── images/
│   │   └── js/
│   └── logo-new.png
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx      # Sidebar with contact info and social links
│   │   ├── Navbar.tsx       # Navigation bar for page switching
│   │   ├── About.tsx        # About section with services and technologies
│   │   ├── Resume.tsx       # Education, experience, and skills
│   │   ├── Portfolio.tsx    # Projects showcase with filtering
│   │   └── Contact.tsx      # Contact form with EmailJS integration
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles (migrated from original)
│   └── ion-icon.d.ts        # TypeScript declarations for Ionicons
├── index.html
├── package.json
└── vite.config.ts
```

## 🛠️ Technologies Used

- **React 18**: Modern React with Hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **EmailJS**: Email service for contact form
- **Ionicons**: Icon library
- **CSS3**: Custom styling (preserved from original)

## 📦 Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your API keys:
     - EmailJS public key, service ID, and template ID
     - Google Maps API key

```bash
# Create .env file from example
cp .env.example .env
```

Then edit `.env` with your actual keys.

## 🚀 Running the Application

### Development Mode
Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Production Build
Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Components Overview

### Sidebar Component
- Displays avatar, name, and title
- Shows/hides contact information (mobile responsive)
- Contains social media links (GitHub, LinkedIn)

### Navbar Component
- Navigation between different sections
- Highlights active page
- Smooth scrolling to top on navigation

### About Component
- Personal introduction
- Passionate areas (services)
- Technology stack showcase

### Resume Component
- Education timeline
- Work experience
- Skills with progress bars

### Portfolio Component
- Project cards with images
- Category filtering (All, Web Development, Machine Learning, Game Development)
- Responsive grid layout
- Links to GitHub repositories

### Contact Component
- Google Maps integration
- Contact form with validation
- EmailJS integration for sending messages
- Real-time form validation

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id

# Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

**Note**: The `.env` file is included in `.gitignore` to keep your API keys secure. Use `.env.example` as a template.

### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Get your public key from the dashboard
4. Add the keys to your `.env` file

### Google Maps Setup
1. Get an API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps Embed API
3. Add the key to your `.env` file

## 🎯 Key Improvements Over Original

1. **Modular Architecture**: Separated concerns into individual components
2. **Type Safety**: TypeScript provides better developer experience and catches errors
3. **State Management**: React hooks for cleaner state management
4. **Better Performance**: Vite's fast HMR and optimized builds
5. **Maintainability**: Easier to update and extend
6. **Modern Tooling**: Better debugging and development experience
7. **Environment Variables**: Secure API key management with `.env` file
8. **Page Persistence**: Active page persists across page refreshes using localStorage

## 📝 Migration Notes

### What Was Converted:
- ✅ All HTML structure to React components
- ✅ JavaScript functionality to React hooks
- ✅ Event handlers to React event system
- ✅ CSS preserved and working
- ✅ EmailJS integration maintained
- ✅ All images and assets copied
- ✅ Ionicons integration

### Key Changes:
- Navigation now uses React state instead of DOM manipulation
- Sidebar toggle uses React state
- Form validation uses React hooks
- Project filtering managed with React state
- All data converted to JavaScript objects/arrays for easier management

## 🐛 Troubleshooting

### TypeScript Errors for ion-icon
The `ion-icon` TypeScript warnings are expected. The `ion-icon.d.ts` file provides type declarations, but you may still see some warnings. These don't affect functionality.

### Images Not Loading
Ensure all assets are in the `public/assets/images` directory. Vite serves files from the `public` folder directly.

### EmailJS Not Working
1. Check your `.env` file has the correct keys
2. Verify your service and template IDs in EmailJS dashboard
3. Ensure the EmailJS package is installed: `npm install @emailjs/browser`
4. Make sure `.env` variables start with `VITE_` prefix

### Page Resets to About on Refresh
This should now be fixed! The app uses localStorage to persist the active page across refreshes. Clear your browser's localStorage if you experience issues.

## 📄 License

Same as the original portfolio project.

## 👤 Author

**Harkit Singh Chhabra**
- GitHub: [@Harkit2004](https://github.com/Harkit2004)
- LinkedIn: [Harkit Singh Chhabra](https://www.linkedin.com/in/harkit-singh-chhabra/)
- Email: harkitsinghchhabra@gmail.com

## 🙏 Acknowledgments

- Original HTML template structure preserved
- Ionicons for beautiful icons
- EmailJS for contact form functionality

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
