import { Project, Testimonial, ProcessStep, FAQItem, NavLink, CaseStudy } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#cta' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Kitchen Remodeler AI Pipeline',
    description: 'Increased booked consultations by 40% with automated qualification and follow-up.',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2768&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Bathroom Renovation Follow-Up',
    description: 'Revived cold leads and filled the remodeler’s calendar using SMS+Email flows.',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Whole-Home Consultation Bot',
    description: '24/7 AI answering system that handles FAQs and schedules estimates automatically.',
    category: 'Whole Home',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Custom Cabinet Lead Gen',
    description: 'Targeted ad qualification bot that filters for budget and timeline before booking.',
    category: 'Cabinetry',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Basement Finishing System',
    description: 'Automated re-engagement campaign for leads 6+ months old.',
    category: 'Basement',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Exterior Siding Estimator',
    description: 'AI assistant that collects square footage and material preference before the call.',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2940&auto=format&fit=crop'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'We Build Your AI Pipeline',
    description: 'Custom-built automation that mirrors your best salesperson, available 24/7.',
    icon: 'Cpu'
  },
  {
    id: 2,
    title: 'We Connect It',
    description: 'Seamless integration with your existing ads, website, and lead sources.',
    icon: 'Zap'
  },
  {
    id: 3,
    title: 'Daily Qualified Appointments',
    description: 'You wake up to a calendar filled with high-intent homeowners ready for estimates.',
    icon: 'CalendarCheck'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    client: "Luxe Kitchens & Bath",
    metric: "+$140k in 30 Days",
    description: "By automating lead response time to under 1 minute, we helped Luxe Kitchens secure 3 major remodels in their first month.",
    tags: ["Lead Speed", "Qualification"]
  },
  {
    id: 2,
    client: "Elite Home Renovations",
    metric: "18 Bookings / Mo",
    description: "Elite was drowning in bad leads. Our AI filtered out 60% of tire-kickers, leaving only high-value prospects.",
    tags: ["Filtering", "Calendar Fill"]
  },
  {
    id: 3,
    client: "Urban Remodel Co.",
    metric: "40% Higher Close Rate",
    description: "Leads that were nurtured by our AI showed up to appointments more educated and ready to buy.",
    tags: ["Nurture", "Education"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Ross',
    role: 'Owner',
    company: 'Ross Design Build',
    quote: 'We used to spend hours chasing leads. Now Buildora handles it all. We booked 12 estimates last week completely on autopilot.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Jessica Lee',
    role: 'Marketing Director',
    company: 'Modern Spaces',
    quote: 'The AI sounds incredibly human. Our leads have no idea they are talking to a bot until they are booked on our calendar.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Founder',
    company: 'Chen Renovations',
    quote: 'Best investment we made this year. The setup was fast, and the dashboard makes it easy to see exactly what’s happening.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/85.jpg'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How many appointments can I expect?',
    answer: 'Most of our partners see between 10-15 highly qualified appointments per month within the first 30 days.'
  },
  {
    question: 'Does the AI replace my sales team?',
    answer: 'No, it empowers them. It handles the initial grunt work—qualification and scheduling—so your team only speaks to homeowners ready to buy.'
  },
  {
    question: 'What integrations do you support?',
    answer: 'We connect with almost any CRM (Salesforce, HubSpot, Pipedrive) and calendar system (Calendly, Google Calendar) you currently use.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'We operate on a performance-first model. Book a call to discuss how our system fits your current infrastructure.'
  },
  {
    question: 'Can I customize the AI script?',
    answer: 'Absolutely. We tailor the conversation flow, tone, and qualification questions specifically to your remodeling niche.'
  },
  {
    question: 'What happens if the AI doesn\'t know an answer?',
    answer: 'The system identifies complex queries and seamlessly alerts a human team member to take over via SMS or email.'
  }
];