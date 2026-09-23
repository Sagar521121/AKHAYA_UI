# AKHAYA

A full-stack e-commerce web application focused on discovering and purchasing Indian handicrafts and traditional products such as Pashmina shawls, Kalamkari, Kolhapuri chappals, Mysore silk, rugs, carpets, and related categories.

## Demo

[![Watch the AKHAYA Demo](https://i.ytimg.com/vi/PaNt5ow4yIs/hqdefault.jpg)](https://youtu.be/PaNt5ow4yIs)

A 2-minute walkthrough of the AKHAYA website covering the main user flows and UI interactions.

## Screenshots

<p align="center">
  <img src="https://i.ytimg.com/vi/PaNt5ow4yIs/1.jpg" width="32%" alt="AKHAYA screenshot 1">
  <img src="https://i.ytimg.com/vi/PaNt5ow4yIs/2.jpg" width="32%" alt="AKHAYA screenshot 2">
  <img src="https://i.ytimg.com/vi/PaNt5ow4yIs/3.jpg" width="32%" alt="AKHAYA screenshot 3">
</p>

## Overview

AKHAYA combines a React + TypeScript storefront with a Supabase Edge Function backend. The application includes authentication, product browsing, category filtering, product details, cart management, checkout, and order history.

The project was initially designed through Figma Make and then organized as a Vite-based React application.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **UI:** Tailwind CSS, Material UI, Radix UI, Lucide React
- **Routing & Forms:** React Router, React Hook Form
- **Backend:** Supabase Edge Functions, Hono
- **Data & Auth:** Supabase Auth, Supabase KV Store
- **Other:** Recharts, Motion, date-fns

## Key Features

### User Authentication
- Signup and sign-in flows
- Token-based authenticated requests
- Current-user session handling
- Protected user operations

### Product Discovery
- Product catalogue with category-based browsing
- Product detail pages
- Product filtering by category
- Product data and seeded catalogue

### Shopping Flow
- Add items to cart
- Update item quantities
- Remove individual items
- Clear cart
- Checkout and order creation
- Order history and order details

### Backend API
- REST-style endpoints for authentication, products, cart, and orders
- Request authentication through bearer tokens
- HTTP status handling and JSON error responses
- CORS and request logging through Hono middleware
- Health-check endpoint for the backend service

## Architecture

The application follows a simple client-server structure:

```
React + TypeScript + Vite
          |
          v
   Service API Layer
          |
          v
Supabase Edge Function
        (Hono)
          |
          v
 Supabase Auth + KV Store
```

The frontend API service centralizes requests to the backend. The Supabase Edge Function exposes endpoints for authentication, products, cart operations, and orders, while the KV layer stores application data.

## Resume Highlights

- Built a full-stack e-commerce application using React, TypeScript, Vite, Supabase Edge Functions, and Hono.
- Implemented authenticated REST-style APIs for products, cart, checkout, and order management.
- Developed reusable frontend pages and components for product discovery, category browsing, cart management, checkout, and order tracking.
- Added token-based authentication and server-side user validation for protected operations.

## Project Structure

```
src/
  app/
    components/
    context/
    data/
    services/
    *.tsx
  assets/
  styles/

supabase/
  functions/
    server/
      index.tsx
      kv_store.tsx
```

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

Backend deployment requires a configured Supabase project and the required Supabase environment variables/secrets.

## Notes

This repository includes components generated or adapted through Figma Make. Third-party assets and UI components are acknowledged in [ATTRIBUTIONS.md](./ATTRIBUTIONS.md).

## Repository

[GitHub](https://github.com/Sagar521121/AKHAYA_UI)
