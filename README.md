# NeuralDesk - AI Research Assistant Platform

A production-level AI SaaS Dashboard built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui, and Recharts.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Features

- **Dashboard**: Real-time analytics with interactive charts
- **Research Assistant**: AI-powered research with multiple sources
- **Team Management**: Manage team members with role-based permissions
- **Billing**: Plan selection, usage metrics, and invoice history
- **Notifications**: Real-time notifications with filtering
- **Settings**: Comprehensive user and account settings
- **Dark Mode**: Professional dark theme with smooth transitions
- **Responsive Design**: Mobile, tablet, and desktop optimized

## Project Structure

```
neuraldesk/
├── src/
│   ├── components/
│   │   ├── layout/       # Sidebar, Topbar, AppLayout
│   │   ├── ui/           # Reusable UI components
│   │   ├── charts/       # Recharts visualizations
│   │   ├── dashboard/    # Dashboard-specific components
│   │   ├── billing/      # Billing components
│   │   ├── team/         # Team management components
│   │   ├── notifications/# Notification components
│   │   └── settings/     # Settings components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom hooks
│   ├── data/             # Mock data
│   ├── types/            # TypeScript types
│   └── App.tsx           # Main app component
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run TypeScript type checking

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Recharts** - Data visualization
- **React Router v6** - Routing
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## Design System

- **Primary**: Indigo (#6366F1)
- **Secondary**: Violet (#8B5CF6)
- **Background**: Near-black (#0A0A0F)
- **Fonts**: DM Sans (body), Space Grotesk (headings)

## License

MIT
