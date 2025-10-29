# Michelle Tianna Antiques

## Overview

Michelle Tianna Antiques is a luxury antiques dealer website showcasing a multinational business serving museums, corporations, and prestigious retail establishments across six countries (Dubai, USA, Italy, Germany, France, and Canada). The application features a single-page design with sections for hero presentation, about Michelle, specialized services, international presence, antiques gallery, contact form, and footer.

The site emphasizes timeless elegance, trust, and credibility through a photography-first approach inspired by high-end auction houses like Christie's and Sotheby's. The design uses sophisticated typography (Playfair Display for headings, Inter for body text) and a neutral color palette to reflect the heritage value of the antiques being showcased.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management
- Tailwind CSS for utility-first styling with custom design system

**Component Structure:**
- Single-page application with modular section components (`Hero`, `About`, `Services`, `InternationalPresence`, `AntiquesGallery`, `Contact`, `Footer`)
- Shadcn/ui component library for consistent, accessible UI components (buttons, forms, cards, dialogs, etc.)
- Custom design system with CSS variables for theming (light mode with neutral color scheme)
- Form management using React Hook Form with Zod schema validation

**Design System:**
- Typography hierarchy using Playfair Display (serif) and Inter (sans-serif)
- Spacing system based on Tailwind units (4, 6, 8, 12, 16, 20, 24)
- Consistent border radius (3px, 6px, 9px) and elevation effects
- Custom CSS variables for colors, borders, and interactive states

### Backend Architecture

**Server Technology:**
- Express.js server running on Node.js
- TypeScript for type safety across the full stack
- Development and production build modes with environment-specific configurations

**API Design:**
- RESTful API endpoint pattern (`/api/*`)
- Single contact form endpoint (`POST /api/contact`) for inquiry submissions
- JSON request/response format with Zod schema validation
- Centralized error handling with appropriate HTTP status codes

**Data Validation:**
- Shared schema definitions between client and server using Drizzle-Zod
- Input validation enforced at API boundary
- Type-safe data contracts using TypeScript interfaces

### Data Storage

**Current Implementation:**
- In-memory storage using Map data structure (`MemStorage` class)
- Storage abstraction through `IStorage` interface for future migration flexibility
- Contact inquiries stored with auto-generated UUIDs and timestamps

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless`)
- Schema definition in `shared/schema.ts` defines `contact_inquiries` table structure
- Migration setup prepared but currently using memory storage
- Database schema includes: id (UUID primary key), name, email, phone, inquiry type, message, and created timestamp

**Design Rationale:**
The memory storage allows rapid development and testing without database dependencies. The abstraction layer (`IStorage` interface) enables seamless transition to persistent PostgreSQL storage when needed without changing business logic or API contracts.

### External Dependencies

**UI Component Library:**
- Radix UI primitives for accessible, unstyled components (dialogs, dropdowns, forms, etc.)
- Shadcn/ui as the component composition layer built on Radix UI
- Lucide React for iconography
- React Icons for brand icons (WhatsApp)

**Database & ORM:**
- Neon Serverless PostgreSQL driver for database connectivity
- Drizzle ORM for type-safe database queries and schema management
- Drizzle Kit for migrations and schema management

**Forms & Validation:**
- React Hook Form for performant form state management
- Zod for runtime type validation and schema definitions
- @hookform/resolvers for React Hook Form + Zod integration

**Styling & Design:**
- Tailwind CSS for utility-first styling
- Class Variance Authority for variant-based component styling
- clsx and tailwind-merge for conditional class composition

**Development Tools:**
- TSX for running TypeScript in development
- esbuild for production server bundling
- Replit-specific plugins for development experience (error overlay, cartographer, dev banner)

**Assets:**
- Static images stored in `attached_assets/generated_images/` directory
- Vite alias configuration (`@assets`) for clean image imports
- Pre-generated professional images for profile, logo, and antiques gallery