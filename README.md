# Food Ordering App - Frontend Only

## Overview
This is a **React 19** application built with **Vite 6.2.0**, designed as a complete food ordering frontend. The application provides an intuitive user experience for browsing food categories, searching, adding items to a cart, and completing purchases via **Stripe**.

## Features

- **Food Categories**: Browse a variety of cuisines and meals.
- **Explore Section**: Discover trending dishes and restaurant specials.
- **Search Functionality**: Quickly find meals using a dynamic search feature.
- **User Authentication**: Secure **login** and user management.
- **Shopping Cart**: Add and remove items effortlessly.
- **Stripe Integration**: Seamless payment processing.
- **Responsive UI**: Built with **Bootstrap** for a modern, adaptable interface.

## Prerequisites
To set up this project, ensure you have the following installed:

- **Node.js 18+**
- **Vite 6.2.0**
- **Stripe API credentials**

## Setup Instructions
### 1. Clone the repository:
```bash
git clone https://github.com/tecnologiaefinancas/foodies
cd foodies
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Configure the environment:
Create a `.env` file in the root directory and add your Stripe credentials:

```env
VITE_STRIPE_PUBLIC_KEY=<your-stripe-public-key>
```

### 4. Start the development server:
```bash
npm run dev
```
The application will be available at **http://localhost:5173/** or **http://localhost:5174/**.

## Technology Stack
- **React 19**
- **Vite 6.2.0**
- **Stripe**
- **Bootstrap**
- **Node.js**

## Acknowledgment
Special thanks to **Bushan** for the valuable lessons that inspired this project before further improvements.
