# DigitalPro - Digital Marketing Agency Website

A modern, responsive digital marketing business website built with React, React Router, and Tailwind CSS.

## Features

- **Home Page**: Hero section, services overview, and call-to-action
- **Services Page**: Detailed information about SEO, Social Media Marketing, Google Ads, and Web Design
- **About Page**: Company mission, vision, and experience
- **Contact Page**: Enquiry form with name, email, phone, and message fields

## Tech Stack

- React 19
- React Router DOM
- Tailwind CSS
- Vite

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.jsx   # Navigation header
│   └── Footer.jsx   # Footer component
├── pages/           # Page components
│   ├── Home.jsx     # Home page
│   ├── Services.jsx # Services page
│   ├── About.jsx    # About page
│   └── Contact.jsx  # Contact page
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles with Tailwind
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features Details

### Responsive Design
- Mobile-first approach
- Fully responsive navigation menu
- Optimized for all screen sizes

### Contact Form
- Form validation
- Console logging (no backend required)
- Success message feedback
- Form reset after submission

### Navigation
- React Router for client-side routing
- Sticky header navigation
- Mobile hamburger menu

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.
