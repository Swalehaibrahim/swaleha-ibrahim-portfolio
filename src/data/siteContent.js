const unsplash = (id, size = 'w=1400&q=80') =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&${size}`;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Selected Work', href: '#selected-work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const heroImages = [
  unsplash('photo-1494526585095-c41746248156', 'w=1800&q=80'),
  unsplash('photo-1513694203232-719a280e022f', 'w=1800&q=80'),
  unsplash('photo-1484154218962-a197022b5858', 'w=1800&q=80'),
];

export const profile = {
  name: 'Swaleha Ibrahim',
  profession: 'Interior Designer',
  location: 'India',
  tagline: 'Designing Spaces That Reflect Elegance',
  subtext:
    'I create functional, aesthetic, and personalized spaces that reflect style, comfort, and purpose. From concept to execution, I focus on transforming interiors into elegant and practical environments.',
  portrait: '/images/swaleha-about.jpeg',
  bio: [
    'I believe great interior design balances beauty and functionality. Every space tells a story, and my goal is to create interiors that reflect personality, comfort, and purpose.',
    "I focus on thoughtful layouts, elegant materials, and modern aesthetics to transform spaces into inspiring environments. Whether it's a home, office, or commercial space, I design with attention to detail and lasting impact.",
  ],
  philosophy: 'Every client brief is a story waiting to be told.',
  highlights: [
    { value: 'Homes', label: 'Residential interiors' },
    { value: 'Work', label: 'Commercial design' },
    { value: '3D', label: 'Visualization and planning' },
  ],
};

export const projects = [
  {
    id: 'ivory-residence',
    title: 'Residential Living Concept',
    category: 'Living Rooms',
    location: 'Mumbai',
    year: '2025',
    area: '3,200 sq ft',
    summary:
      'A layered living room concept focused on comfort, aesthetic balance, and personalized styling.',
    description:
      'This residential concept was developed to create a calm and inviting family living space. The design balances soft materials, elegant tones, and functional planning so the room feels warm, modern, and easy to live in.',
    image: unsplash('photo-1494526585095-c41746248156'),
    gallery: [
      unsplash('photo-1513694203232-719a280e022f'),
      unsplash('photo-1460317442991-0ec209397118'),
      unsplash('photo-1505693416388-ac5ce068fe85'),
    ],
    tags: ['Residential interior design', 'Personalized styling', 'Functional planning'],
    beforeAfter: {
      before: unsplash('photo-1460317442991-0ec209397118'),
      after: unsplash('photo-1494526585095-c41746248156'),
    },
  },
  {
    id: 'bedroom-concept-suite',
    title: 'Bedroom Concept Suite',
    category: 'Bedrooms',
    location: 'Bengaluru',
    year: '2024',
    area: '1,150 sq ft',
    summary:
      'A serene bedroom concept shaped through thoughtful layouts, elegant materials, and modern aesthetics.',
    description:
      'This bedroom design focuses on creating a restful personal environment with a strong sense of comfort and identity. Clean lines, layered finishes, and balanced lighting help the space feel refined while remaining practical for daily life.',
    image: unsplash('photo-1505693416388-ac5ce068fe85'),
    gallery: [
      unsplash('photo-1513694203232-719a280e022f'),
      unsplash('photo-1494526585095-c41746248156'),
      unsplash('photo-1460317442991-0ec209397118'),
    ],
    tags: ['Bedroom interiors', 'Elegant materials', 'Modern aesthetics'],
  },
  {
    id: 'modular-kitchen-10x12',
    title: 'Modular Kitchen 10 x 12',
    category: 'Kitchens',
    location: 'Hyderabad',
    year: '2025',
    area: '900 sq ft',
    summary:
      'A modular kitchen concept focused on efficient storage, clean layout planning, and an elegant modern finish.',
    description:
      'This kitchen design was developed to combine practical movement, organized cabinetry, and a refined visual language. The layout supports everyday use while maintaining a polished, contemporary feel through balanced proportions and thoughtful detailing.',
    image: unsplash('photo-1484154218962-a197022b5858'),
    gallery: [
      unsplash('photo-1494526585095-c41746248156'),
      unsplash('photo-1460317442991-0ec209397118'),
      unsplash('photo-1505693416388-ac5ce068fe85'),
    ],
    tags: ['Modular kitchen', 'Space planning', 'Furniture layout'],
    beforeAfter: {
      before: unsplash('photo-1460317442991-0ec209397118'),
      after: unsplash('photo-1484154218962-a197022b5858'),
    },
  },
  {
    id: 'commercial-interior-studio',
    title: 'Commercial Interior Studio',
    category: 'Office Spaces',
    location: 'Gurugram',
    year: '2024',
    area: '2,050 sq ft',
    summary:
      'A commercial design concept created to support productivity, brand identity, and modern workplace flow.',
    description:
      'This office and commercial interior study explores how spatial planning, furniture arrangement, and material balance can improve both day-to-day efficiency and client perception. The result is a polished environment with a strong functional backbone.',
    image: unsplash('photo-1497366754035-f200968a6e72'),
    gallery: [
      unsplash('photo-1497366811353-6870744d04b2'),
      unsplash('photo-1513694203232-719a280e022f'),
      unsplash('photo-1494526585095-c41746248156'),
    ],
    tags: ['Commercial interior design', 'Brand identity', 'Workplace planning'],
  },
  {
    id: 'luxury-bedroom-study',
    title: 'Luxury Bedroom Study',
    category: 'Bedrooms',
    location: 'Pune',
    year: '2023',
    area: '1,400 sq ft',
    summary:
      'A luxury bedroom proposal that pairs modern detailing with a calm, comfortable material palette.',
    description:
      'Created around the idea of comfort with character, this concept layers clean architectural lines, warm flooring, and tailored furniture planning into a cohesive bedroom environment that feels elegant and lasting.',
    image: unsplash('photo-1513694203232-719a280e022f'),
    gallery: [
      unsplash('photo-1505693416388-ac5ce068fe85'),
      unsplash('photo-1460317442991-0ec209397118'),
      unsplash('photo-1494526585095-c41746248156'),
    ],
    tags: ['Luxury interiors', 'Furniture planning', 'Attention to detail'],
  },
  {
    id: 'space-planning-concept',
    title: '3D Space Planning Concept',
    category: 'Living Rooms',
    location: 'Delhi',
    year: '2026',
    area: '2,600 sq ft',
    summary:
      'A concept-driven interior study combining 3D visualization, layout planning, and modern luxury direction.',
    description:
      'This project reflects the value of visualization early in the design process. By exploring layout, circulation, and furniture positions in 3D, the concept helps shape a space that feels both efficient and visually resolved before execution.',
    image: unsplash('photo-1460317442991-0ec209397118'),
    gallery: [
      unsplash('photo-1494526585095-c41746248156'),
      unsplash('photo-1484154218962-a197022b5858'),
      unsplash('photo-1497366811353-6870744d04b2'),
    ],
    tags: ['3D visualization', 'Layout planning', 'Modern luxury interiors'],
  },
];

export const services = [
  {
    title: 'Residential Interior Design',
    description:
      'Designing beautiful and functional living spaces including bedrooms, kitchens, living rooms, and complete home interiors.',
    icon: 'Palette',
  },
  {
    title: 'Commercial Space Design',
    description:
      'Creating modern office spaces, shops, and commercial interiors that enhance productivity and brand identity.',
    icon: 'Ruler',
  },
  {
    title: '3D Visualization & Space Planning',
    description:
      'Providing 3D visualizations, layout planning, and furniture arrangements for efficient and aesthetic interiors.',
    icon: 'Hammer',
  },
  {
    title: 'Furniture & Color Consultation',
    description:
      'Curating furniture layouts, color palettes, materials, lighting, and modern luxury details that elevate each space.',
    icon: 'MessageSquare',
  },
];

export const contactDetails = {
  email: 'swalehamulagund@gmail.com',
  phone: '+91 98861 96956',
  whatsapp: 'https://wa.me/919886196956',
  instagram: 'https://www.instagram.com/designs_by_swaleha/',
  linkedin: 'https://www.linkedin.com/in/swaleha-ibrahim-745905375/',
  location: 'India',
};
