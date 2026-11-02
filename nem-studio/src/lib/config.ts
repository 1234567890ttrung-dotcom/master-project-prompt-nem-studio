export const siteConfig = {
  name: 'NEM STUDIO',
  tagline: 'Beyond the frame.',
  description:
    'NEM STUDIO is a photography studio exploring light, perspective and emotion through carefully crafted visual stories.',
  url: 'https://nemstudio.com',
  social: {
    instagram: 'https://instagram.com/nemstudio',
    facebook: 'https://facebook.com/nemstudio',
    tiktok: '',
  },
  contact: {
    email: 'hello@nemstudio.com',
    zalo: '',
    phone: '',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  categories: ['Portrait', 'Beauty', 'Couple', 'Graduation', 'Editorial', 'Profile', 'Birthday'],
} as const;
