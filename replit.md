# Flexpandas Business Website

## Overview

Flexpandas is a modern 4-page business website for an automation and design agency. The application is built as a full-stack web application with a React frontend and Express backend, showcasing services including AI automation, design subscriptions, and video editing. The site features a professional design with panda-themed branding, contact forms, pricing information, and service descriptions designed to convert visitors into leads.

## Recent Changes

### September 13, 2025
- **Replaced Demo Video with Split-Screen Comparison**: Implemented interactive manual vs automated process comparison showing 4+ hours vs 2 minutes time savings
- **Enhanced Visual Hierarchy**: Added color-coded panels (red for manual problems, green for automated solutions) with step-by-step process flows
- **Improved Conversion Elements**: Added comparison-specific CTA section with clear value proposition messaging
- **Mobile Responsive Design**: CSS Grid layout that adapts from two-column desktop to single-column mobile view

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing with support for multiple pages (Home, Pricing, About, Contact)
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **Component Library**: Radix UI components with shadcn/ui for consistent, accessible UI components
- **State Management**: React Query (TanStack Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript for type safety across the entire stack
- **API Design**: RESTful endpoints for contact form submissions and data retrieval
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development**: Vite integration for hot module replacement and fast development builds

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database interactions
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Validation**: Drizzle-Zod integration for runtime type validation matching database schemas
- **Storage Strategy**: In-memory storage fallback for development with persistent PostgreSQL for production

### Authentication and Authorization
- **Current State**: No authentication system implemented (static business website)
- **Future Considerations**: Contact form submissions are stored but no user authentication required

### Design System
- **Theme**: Professional panda-themed design with green accent colors (#10B981)
- **Typography**: Inter font family for modern, clean appearance
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Component Structure**: Modular component architecture with reusable UI elements

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Connection Management**: connect-pg-simple for session management if needed

### UI and Styling
- **Radix UI**: Comprehensive set of headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: For component variant management

### Development and Build Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking across frontend and backend
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for runtime type checking
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Business Integrations
- **Tools Mentioned**: Make.com, HubSpot, Pipedrive, Figma, CapCut (referenced in pricing but not directly integrated)
- **Contact Forms**: Custom API endpoint for lead capture and business inquiries

### Replit-Specific
- **Development Plugins**: Replit-specific Vite plugins for error handling and development features
- **Deployment**: Configured for Replit hosting environment