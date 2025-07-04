# 🚀 GrowthProAI - Mini Local Business Dashboard

A modern, responsive dashboard that simulates how small businesses can view their SEO content and Google Business data. Built for the GrowthProAI Full Stack Intern Assignment.

## ✨ Features

### 🎯 Core Functionality
- **Business Information Form**: Input business name and location
- **Simulated Google Business Data**: Display rating, reviews, and metrics
- **AI-Generated SEO Headlines**: Dynamic headline generation and regeneration
- **Real-time Updates**: Smooth loading states and animations

### 🎨 Design & UX
- **Modern Dark Theme**: Professional gradient-based design system
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Loading spinners, transitions, and micro-interactions
- **Form Validation**: Client-side validation with error handling
- **Toast Notifications**: User feedback for all actions

### 🛠️ Technical Features
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular, reusable components
- **Mock API Service**: Simulated backend functionality
- **State Management**: React hooks for clean state handling
- **Error Handling**: Comprehensive error handling and user feedback

## 🏗️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui with custom variants
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **Form Handling**: Custom validation logic
- **Animations**: CSS transitions and Tailwind animations

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm (or yarn/bun)
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GrowthProAI-Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Usage

1. **Enter Business Information**
   - Fill in your business name (e.g., "Cake & Co")
   - Enter your location (e.g., "Mumbai")
   - Click "Get Business Insights"

2. **View Analytics Dashboard**
   - See simulated Google rating and review count
   - Read AI-generated SEO headline
   - View performance metrics

3. **Regenerate Content**
   - Click "Regenerate SEO Headline" for new suggestions
   - Get fresh AI-powered marketing copy

## 🎨 Design System

The application uses a comprehensive design system with:

- **Color Palette**: Dark theme with green accent colors
- **Typography**: Modern, readable font hierarchy
- **Gradients**: Subtle gradients for visual depth
- **Shadows**: Professional shadow system
- **Animations**: Smooth transitions and loading states

### Key Design Tokens
- Primary: `hsl(142 71% 45%)` (Green)
- Background: `hsl(240 10% 3.9%)` (Dark)
- Card backgrounds with gradients
- Professional shadows and glows

## 🏗️ Architecture

### Components Structure
```
src/
├── components/
│   ├── BusinessForm.tsx      # Input form with validation
│   ├── BusinessCard.tsx      # Results display card
│   └── ui/                   # Shadcn UI components
├── services/
│   └── businessApi.ts        # Mock API service
├── pages/
│   ├── Dashboard.tsx         # Main dashboard page
│   └── Index.tsx            # Root page
└── hooks/
    └── use-toast.ts         # Toast notifications
```

### API Simulation
The app simulates the required backend endpoints:

- `POST /business-data` - Returns simulated business metrics
- `GET /regenerate-headline` - Generates new SEO headlines

All data is generated consistently based on business name and location to provide realistic results.

## 🎯 Assignment Requirements Fulfilled

### ✅ Frontend (React + Tailwind CSS)
- ✅ Responsive dashboard page
- ✅ Input form (Business Name, Location)
- ✅ Display card with simulated Google Rating
- ✅ Number of Reviews display
- ✅ AI-generated SEO headline
- ✅ "Regenerate SEO Headline" button
- ✅ Clean, mobile-friendly UI

### ✅ Backend Simulation (Mock API)
- ✅ POST /business-data equivalent functionality
- ✅ GET /regenerate-headline equivalent functionality
- ✅ Consistent data generation
- ✅ Realistic response times

### ✅ Bonus Features
- ✅ Loading spinners and smooth transitions
- ✅ React Context for state management (useToast)
- ✅ Form validation with error messages
- ✅ Professional animations and micro-interactions
- ✅ Toast notifications for user feedback
- ✅ Mobile-responsive design
- ✅ TypeScript for type safety

## 🔮 Future Enhancements

If this were to be developed further, potential additions could include:

- Real backend integration with Node.js/Express
- Database integration for storing business data
- User authentication and business profiles
- More sophisticated AI headline generation
- Analytics charts and trend analysis
- Export functionality for reports
- Multi-language support

## 📄 License

This project is created for the GrowthProAI-Assignment.

---

**Built with ❤️ for GrowthProAI**
