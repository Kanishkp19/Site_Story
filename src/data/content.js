// Centralized content for Site_Story. Edit copy, pricing, and portfolio
// entries here — every component reads from this file.

export const BRAND = {
  name: 'Site_Story',
  tagline: 'Web Design Studio · Jaipur',
  whatsapp: '916367840193',
  whatsappDisplay: '63678 40193',
  email: 'sitestory2026@gmail.com',
  contacts: [
    { name: 'Kanishk Pandey', phone: '916367840193', display: '63678 40193' },
    { name: 'Charvi Gautam', phone: '918529359706', display: '85293 59706' },
  ],
};

export const NAV_LINKS = [
  { label: 'Services', href: '#feat' },
  { label: 'Pricing', href: '#packages' },
  { label: 'Work', href: '#port' },
  { label: 'Contact', href: '#cta' },
];

export const HERO = {
  eyebrow: 'Web Design Studio · Jaipur · Available Now',
  headlineLines: ['Turn Your Website', { text: 'Into a 24/7 Sales', em: 'Into a ' }, 'Engine.'],
  sub: "Fast, polished websites that build trust, attract more customers, and help your business grow — without wasting time or money.",
};

export const STATS = [
  { value: 80, suffix: '%', label: 'of customers Google before visiting in person' },
  { value: 3, suffix: 'x', label: 'more enquiries for businesses with a website' },
  { value: null, suffix: '24/7', label: 'your website works even when your shop is closed' },
  { value: 2, suffix: '–3', label: 'extra customers to break even on the investment' },
];

export const FEATURES = [
  { icon: '🌐', title: 'Complete Website', desc: 'A custom-built, professional website designed from scratch to reflect your brand and convert visitors into customers.' },
  { icon: '🌍', title: 'Domain + Hosting', desc: 'Full domain registration and web hosting setup. Your website is live and ready to go from day one.' },
  { icon: '📱', title: 'Mobile-Friendly Design', desc: 'Perfect on all phones, tablets, and desktops — because 70%+ of your customers browse on mobile.' },
  { icon: '💬', title: 'WhatsApp Integration', desc: 'A WhatsApp button for instant customer leads — making it effortless to reach you directly.' },
  { icon: '📍', title: 'Google Maps Embed', desc: 'Customers find your location easily with a built-in Google Maps section on your website.' },
  { icon: '🔍', title: 'Contact Form + SEO', desc: 'A contact form for enquiries plus basic SEO setup so Google can find and rank your business.' },
];

export const PACKAGES = [
  {
    name: 'Basic',
    price: '₹9,999',
    period: 'One-time · 3–5 day delivery',
    featured: false,
    features: [
      'Up to 5 professionally designed pages',
      'Mobile responsive design',
      'Domain + 1 year hosting included',
      'WhatsApp button + contact form',
      'SSL certificate (HTTPS padlock)',
      '2 revision rounds',
      '7 days post-delivery support',
    ],
    note: '⚡ Best for local shops, startups, and first websites',
  },
  {
    name: 'Standard',
    price: '₹18,999',
    period: 'One-time · 5–7 day delivery',
    featured: true,
    badge: '⭐ Most Popular',
    features: [
      'Up to 8 professionally designed pages',
      'Everything in Basic',
      'Photo gallery section',
      'Menu or services section with prices',
      'Google Maps embed',
      'Basic SEO setup',
      'Social media links',
      '14 days post-delivery support',
    ],
    note: '🏆 Restaurants, salons, gyms, clinics, retail stores',
  },
  {
    name: 'Premium',
    price: '₹34,999',
    period: 'One-time · 8–12 day delivery',
    featured: false,
    features: [
      'Up to 12 professionally designed pages',
      'Everything in Standard',
      'Google Analytics setup',
      'Online booking / enquiry system',
      'Blog section',
      'Speed & performance optimization',
      '3 revision rounds',
      '30 days post-delivery support',
    ],
    note: '🚀 Clinics, multi-location brands, established businesses',
  },
];

export const PAYMENT_STEPS = [
  { step: 'Step 01', title: '50% Advance', desc: 'Paid before work begins. Secures your slot and kicks off the design process immediately.' },
  { step: 'Step 02', title: 'Design & Build', desc: 'Your website is designed, built, and reviewed. You receive progress updates throughout.' },
  { step: 'Step 03', title: '50% On Delivery', desc: 'Paid on approval. Website goes live only after final payment is received.' },
];

// Each portfolio item drives the generic <PortfolioMock> renderer.
export const PORTFOLIO = [
  {
    key: 'gym',
    theme: 'gym',
    category: 'Fitness',
    name: 'Gym Template',
    type: 'Gym & Fitness Club',
    logo: 'IRON FORGE',
    nav: ['Classes', 'Pricing', 'Join'],
    headline: ['FORGE', { text: 'YOUR', em: true }, 'STRENGTH.'],
    sub: "Jaipur's premier fitness destination",
    cta: 'JOIN TODAY →',
    stats: [{ n: '200+', l: 'Members' }, { n: '15+', l: 'Trainers' }, { n: '5★', l: 'Rating' }],
    url: 'https://gym-template-pearl.vercel.app/',
  },
  {
    key: 'clinic',
    theme: 'clinic',
    category: 'Healthcare',
    name: 'Clinic Website',
    type: 'Medical Clinic',
    logo: 'Clinic',
    navRight: ['Services', 'Book Now'],
    tag: 'Medical Clinic',
    headline: ['Move Better.', 'Live Better.'],
    sub: 'Expert healthcare care. Personalized recovery plans for lasting results.',
    cta: 'Book Appointment',
    cards: [
      { icon: '🏥', title: 'Sports Injury' },
      { icon: '🩺', title: 'Rehabilitation' },
      { icon: '👨‍⚕️', title: 'Post-Surgery' },
    ],
    url: 'https://clinic-website-virid.vercel.app/',
  },
  {
    key: 'cafe',
    theme: 'cafe',
    category: 'Food & Beverage',
    name: 'Cafe Website',
    type: 'Café & Coffee Shop',
    logo: 'THE CAFE',
    navRight: ['Menu · Visit'],
    headline: ["Life's Too Short", { text: 'For Bad Coffee.', em: true }],
    sub: "Specialty roasts · Jaipur's finest café",
    tags: ['Espresso', 'Cold Brew', 'Filter'],
    menu: [
      { n: 'Flat White', p: '₹180' },
      { n: 'Cold Brew', p: '₹220' },
      { n: 'Pour Over', p: '₹260' },
      { n: 'Croissant', p: '₹120' },
    ],
    url: 'https://restaurant-template-green.vercel.app/',
  },
  {
    key: 'real-estate',
    theme: 'clinic',
    category: 'Real Estate',
    name: 'Real Estate Template',
    type: 'Property & Real Estate',
    logo: 'Luxe Realty',
    navRight: ['Properties', 'Contact'],
    tag: 'Real Estate',
    headline: ['Find Your', 'Dream Home.'],
    sub: 'Premium residential properties in Jaipur. Expert consulting and guidance.',
    cta: 'View Properties',
    cards: [
      { icon: '🏡', title: 'Luxury Villas' },
      { icon: '🏢', title: 'Apartments' },
      { icon: '🌳', title: 'Plots & Lands' },
    ],
    url: 'https://real-estate-template-liard.vercel.app/',
  },
  {
    key: 'wedding',
    theme: 'salon',
    category: 'Events & Venues',
    name: 'Wedding Hall Template',
    type: 'Wedding & Event Venue',
    logo: 'Royal Palms',
    navRight: ['Venues & Book'],
    headline: [{ text: 'Your Perfect Day,', em: true }, 'Our Perfect Venue.'],
    sub: 'Luxury wedding and event venue in Jaipur',
    services: ['Catering', 'Decor', 'Stage', 'Lighting'],
    feats: [{ n: '200+', l: 'Weddings' }, { n: '1500+', l: 'Capacity' }, { n: '4.9★', l: 'Rating' }],
    url: 'https://wedding-hall-template.vercel.app/',
  },
  {
    key: 'jewellery',
    theme: 'retail',
    category: 'E-Commerce & Retail',
    name: 'Jewellery Store Website',
    type: 'Jewellery & Accessories',
    logo: 'Kanak Jewellers',
    navRight: ['Shop & Collection'],
    headline: ['GOLD &', 'DIAMOND.'],
    sub: 'Exquisite handcrafted jewelry for every occasion',
    products: [
      { grad: 'linear-gradient(135deg,#fef3c7,#fde68a)', label: 'Gold Ring', sale: 'NEW' },
      { grad: 'linear-gradient(135deg,#e5e7eb,#d1d5db)', label: 'Diamond Set', sale: 'SALE' },
      { grad: 'linear-gradient(135deg,#fbcfe8,#f472b6)', label: 'Bridal Haar' },
    ],
    url: 'https://shop-template-eta.vercel.app/',
  },
  {
    key: 'resort',
    theme: 'restaurant',
    category: 'Hospitality & Dining',
    name: 'Resort/Restaurant Website',
    type: 'Resort & Fine Dining',
    logo: 'RAJMAHAL',
    navRight: ['Resort & Dine'],
    eyebrow: 'Luxury Resort & Dining',
    headline: ['Where Luxury', 'Meets Heritage.'],
    sub: 'Experience royal hospitality and fine dining in Jaipur',
    cta: 'BOOK A STAY',
    dishes: [
      { icon: '🏨', title: 'Royal Suites', sub: 'Palace-style living' },
      { icon: '🍽️', title: 'Fine Dining', sub: 'Authentic cuisine' },
      { icon: '🏊', title: 'Pool & Spa', sub: 'Relax & rejuvenate' },
      { icon: '🌴', title: 'Lush Gardens', sub: 'Outdoor events' },
    ],
    url: 'https://rajmahal-tau.vercel.app/',
  },
];

export const ADDONS = [
  { name: 'Monthly Website Maintenance', desc: 'Regular updates, backups, and security checks', price: '₹799', period: '/month' },
  { name: 'Basic SEO Plan', desc: 'Keyword optimization, Google rankings, monthly report', price: '₹3,499', period: '/month' },
  { name: 'Google Business Profile Setup', desc: 'Get found on Google Maps and local searches', price: '₹2,499', period: 'one-time' },
  { name: 'Google Business Management', desc: 'Reviews, posts, and profile updates handled for you', price: '₹1,499', period: '/month' },
  { name: 'Extra Page', desc: 'Beyond your package limit — same quality and care', price: '₹1,500', period: '/page' },
  { name: 'Logo Design', desc: 'Professional logo with full brand files included', price: '₹1,999', period: 'one-time' },
  { name: 'Content Update', desc: 'Text, image, or price changes per request', price: '₹499', period: '/update' },
];

export const PROCESS = [
  { n: '01', icon: '💬', title: 'Pay 50%, we start', desc: 'Pay the advance to secure your slot. Share your business details, logo, photos, and content within 3 days. The timeline starts once we have everything.' },
  { n: '02', icon: '✏️', title: 'We design and build', desc: "You receive progress updates throughout. Two revision rounds are included — your feedback shapes the final result. We don't disappear after taking payment." },
  { n: '03', icon: '🚀', title: 'Approve, go live', desc: 'Pay the final 50% on delivery. Your website goes live. Post-delivery support covers any bugs or tweaks within the included window.' },
];

export const TERMS = [
  {
    title: 'Project Terms',
    items: [
      'Advance is non-refundable once work starts',
      'Timeline begins after advance + all content received',
      "Client delays in content shift delivery — no penalty to the studio",
      '2 revision rounds included · extra rounds at ₹500/round',
      'New pages or features beyond scope are quoted separately',
      "Domain + hosting renewal from Year 2 is client's responsibility",
      'Post-delivery support covers bugs only, not new features',
    ],
  },
  {
    title: 'Cancellation & Refund',
    items: [
      'Cancel before work starts → Full advance refund',
      'Cancel after work started → No refund on advance',
      'Studio cancels → Full refund of all amounts paid',
      'Final payment not received in 5 days → Website taken offline',
      'Full payment not cleared → Ownership not transferred',
      'Payments accepted via UPI, Google Pay, PhonePe, Bank Transfer',
      'Quote valid for 7 days from date of issue',
    ],
  },
];

export const CTA_INFO = ['One-time payment', 'No hidden charges', 'Goes live in days', 'Post-launch support'];
