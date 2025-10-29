# Design Guidelines: Michelle Tianna Antiques

## Design Approach
**Reference-Based Design** inspired by luxury auction houses and high-end antiques platforms (Christie's, Sotheby's, 1stDibs). This approach establishes trust, prestige, and international credibility essential for a multinational antiques business.

## Core Design Principles
- **Timeless Elegance**: Classic design that reflects the heritage value of antiques
- **Trust & Credibility**: Professional presentation emphasizing international experience
- **Visual Richness**: Photography-first approach showcasing antiques and global presence
- **Accessible Luxury**: Approachable yet sophisticated tone

## Typography
- **Primary Font**: Playfair Display (serif) for headings - conveys sophistication and heritage
- **Secondary Font**: Inter (sans-serif) for body text - ensures readability
- **Hierarchy**:
  - Hero headline: text-5xl lg:text-7xl, font-bold
  - Section headings: text-3xl lg:text-5xl, font-bold
  - Subsection headings: text-xl lg:text-2xl, font-semibold
  - Body text: text-base lg:text-lg, leading-relaxed
  - Small text/captions: text-sm

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, m-8, gap-12, py-20, etc.)
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Content blocks: space-y-8 md:space-y-12
- Component gaps: gap-6 md:gap-8 lg:gap-12

## Page Structure

### Hero Section (Full viewport height)
Large hero image showcasing premium antiques in elegant setting (ornate furniture, classical pieces)
- Centered content overlay with blurred background for text/buttons
- Business logo (top-left or centered above headline)
- Headline: "Michelle Tianna Antiques" with elegant subtitle
- Motto/tagline prominently displayed
- Primary CTA: "View Collection" and secondary "Contact Us"
- Subtle scroll indicator

### About Michelle Section
Two-column layout (desktop) / stacked (mobile):
- **Left column**: Professional portrait of Michelle Tianna (warm, approachable, professional attire)
- **Right column**: 
  - Name and credentials
  - Business description and specializations
  - International experience highlighted with country flags or elegant icons (Dubai, USA, Italy, Germany, France, Canada)
  - Years of experience, notable partnerships

### Services Overview
Three-column grid showcasing:
- **Corporate Acquisitions**: Supplying antiques to companies
- **Museum Partnerships**: Curating pieces for museums
- **Retail Excellence**: Premium antiques for malls and showrooms
Each with descriptive icon, heading, and detailed description

### International Presence
World map visualization or elegant country showcase:
- Interactive or static display of countries served (Dubai, USA, Italy, Germany, France, Canada)
- Brief testimonials or notable projects from each region
- Emphasizes multinational credibility

### Antiques Gallery
Masonry grid layout (Pinterest-style) or elegant card grid:
- High-quality images of various antiques categories
- Categories: Furniture, Decorative Arts, Sculptures, Paintings, etc.
- Hover effects revealing item details
- Filter options by category, era, origin
- Professional photography with neutral backgrounds highlighting pieces

### Contact Section
Multi-method contact display with clear usage guidelines:
**Layout**: Two-column (form + contact details)

**Contact Details Panel**:
- **Location**: Redbank Plains, Queensland, Australia with elegant icon
- **Business Email**: michellescarlet455@gmail.com (primary business inquiries)
- **Personal Email**: michelletianna616@gmail.com (also monitored)
- **Phone**: 0434654261 (text/SMS preferred, specify "For business purposes, calls welcome")
- **WhatsApp**: 0489925104 (WhatsApp only - business inquiries)
- Clear labels: "Text/SMS", "WhatsApp Business", "Email Inquiries"

**Contact Form**:
- Fields: Name, Email, Phone (optional), Inquiry Type (dropdown), Message
- Inquiry types: General Inquiry, Buying Antiques, Selling Antiques, Museum Partnership, Corporate Inquiry
- Submit button with confirmation message

### Trust Elements
- Client logos (museums, corporations worked with)
- "Serving International Clients Since [Year]"
- Professional certifications or memberships (if applicable)

### Footer
- Quick links: About, Services, Gallery, Contact
- Business hours and response time expectations
- Social media links (if available)
- Copyright and business registration info
- Redbank Plains, Queensland location

## Component Library

**Buttons**:
- Primary: Large, elegant with subtle hover state
- Secondary: Outlined style for secondary actions
- On image backgrounds: Blurred background (backdrop-blur-sm bg-white/20)

**Cards**:
- Antiques: Shadow on hover, rounded corners (rounded-lg)
- Services: Bordered, ample padding (p-8)
- Minimal elevation, focus on content

**Form Elements**:
- Bordered inputs with focus states
- Adequate padding (p-4)
- Clear labels above inputs
- Validation messages below fields

**Navigation**:
- Sticky header with transparent-to-solid transition on scroll
- Logo left, nav links right
- Mobile: Hamburger menu with elegant slide-in

## Images
- **Hero**: Luxurious antiques setting (ornate furniture, classical décor, warm lighting) - full-width, 100vh
- **Michelle's Portrait**: Professional headshot, warm and approachable
- **Gallery Images**: 15-20 high-quality antiques photos across categories
- **Country Indicators**: Subtle flag icons or elegant location markers for international presence

## Animations
Minimal, refined animations:
- Smooth scroll behavior
- Fade-in on scroll for sections (subtle)
- Gentle hover effects on cards and buttons
- No distracting motion - maintain professional sophistication