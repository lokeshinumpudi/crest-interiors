
import { Project, Service, ProcessStep, Testimonial, FAQItem } from './types';
import { PencilRuler, Hammer, Lightbulb, Palette, Layout, CheckCircle } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Expertise', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Studio', href: '#about' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Stone Villa',
    location: 'Jubilee Hills',
    type: 'Private Residence',
    highlight: 'Custom Travertine Staircase',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    size: 'large', // 2x2
    description: "A sanctuary of stone and light. This residence in Jubilee Hills was conceived as a monolithic structure softened by warm interiors.",
    year: "2023",
    area: "6,500 sq.ft",
    services: ["Architecture", "Interior Design", "Landscape Styling"],
    tags: ["Travertine", "Courtyard Home", "Thermal Mass", "Minimal Joinery"],
    challenges: "The site presented a steep west-facing slope, risking harsh afternoon heat gain and privacy issues from the elevated neighboring plot.",
    solutions: "We carved the home into the terrain rather than sitting it on top, using the earth as an insulator. Deep recessed windows and a central courtyard act as thermal buffers.",
    narrative: `The site for The Stone Villa presented a unique challenge: a steep slope facing west, prone to harsh afternoon sun. Our approach was to carve the home into the terrain rather than sitting it on top, using the earth itself as an insulator.

    We utilized a palette of locally sourced granite and rough-cut travertine to anchor the structure, creating thick thermal masses that regulate the internal temperature naturally. The central courtyard acts as the lungs of the house, drawing in cool air from the shaded lower levels and venting hot air through the skylights.`,
    gallery: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80"
    ],
    craftDetails: [
        { image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80", caption: "Custom walnut veneer with 3mm shadow gaps." },
        { image: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=600&q=80", caption: "Honed Italian Travertine wall cladding." },
        { image: "https://images.unsplash.com/photo-1513506003013-d53476017663?auto=format&fit=crop&w=600&q=80", caption: "Recessed cove lighting detail." },
        { image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=600&q=80", caption: "Concealed hardware integration." }
    ]
  },
  {
    id: '2',
    title: 'Apartment 4B',
    location: 'Financial District',
    type: 'Luxury Penthouse',
    highlight: 'Walnut Joinery System',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
    size: 'medium', // 1x2 vertical
    description: "Perched high above the Financial District, this penthouse required a layout overhaul to maximize the panoramic views while retaining intimacy.",
    year: "2024",
    area: "4,200 sq.ft",
    services: ["Interior Architecture", "Bespoke Joinery", "Lighting Design"],
    tags: ["Walnut Pods", "Penthouse", "City Views", "Hidden Storage"],
    challenges: "The original layout was an exposed glass box—cold, impersonal, and lacking defined private zones for the family.",
    solutions: "We inserted independent 'wooden pods' to house private functions. These curved walnut volumes break up the space and add warmth without blocking the skyline views.",
    narrative: `Designing inside a glass box often feels cold and exposed. Our primary goal for Apartment 4B was to reintroduce intimacy without sacrificing the breathtaking views of the Hyderabad skyline.

    We achieved this by inserting 'wooden pods' within the open floor plan. These pods house the private functions—powder rooms, pantry, and wardrobes—and are clad in rich, vertical-grain walnut. They act as warm anchors in a sea of glass and marble.`,
    gallery: [
        "https://images.unsplash.com/photo-1502005229766-939cb4a54161?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522771753035-111dfdcc86a3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80",
         "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],
    craftDetails: [
        { image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80", caption: "Book-matched veneer selection." },
        { image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80", caption: "Seamless flooring transitions." }, 
        { image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=600&q=80", caption: "Integrated handle details." },
        { image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=600&q=80", caption: "Bronze framed glass partitions." }
    ]
  },
  {
    id: '3',
    title: 'Serenity House',
    location: 'Gachibowli',
    type: '4BHK Interior',
    highlight: 'Minimalist Lighting Plan',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    size: 'medium', // 1x2 vertical to fill row
    description: "Designed for a young family, Serenity House prioritizes calm and durability using a neutral palette and tactile fabrics.",
    year: "2023",
    area: "3,100 sq.ft",
    services: ["Turnkey Interiors", "Furniture Selection"],
    tags: ["Matte Black", "Limewash", "Family Home"],
    challenges: "The client wanted a minimalist aesthetic that could still withstand the wear and tear of two young children and pets.",
    solutions: "We used washable matte limewash paints and durable boucle fabrics. Storage was integrated into walls to keep clutter hidden but accessible.",
    narrative: "A study in subtlety. Serenity House avoids visual noise in favor of texture. Linen drapes, boucle upholstery, and matte limewash walls create a tactile experience that changes as the daylight shifts.",
    gallery: [
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    craftDetails: [
        { image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=600&q=80", caption: "Curved plaster corners." },
        { image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=600&q=80", caption: "Custom linen headboards." },
        { image: "https://images.unsplash.com/photo-1556912173-3db996ea0622?auto=format&fit=crop&w=600&q=80", caption: "Matte black fixture integration." },
        { image: "https://images.unsplash.com/photo-1616594039964-40891a912d6b?auto=format&fit=crop&w=600&q=80", caption: "Hidden door systems." }
    ]
  },
  {
    id: '4',
    title: 'Project Graphite',
    location: 'Banjara Hills',
    type: 'Commercial Lounge',
    highlight: 'Acoustic Paneling',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    size: 'small',
    description: "A private lounge and workspace for a boutique investment firm, focusing on acoustics and privacy.",
    year: "2022",
    area: "1,800 sq.ft",
    services: ["Commercial Interiors", "Acoustic Design"],
    tags: ["Dark tones", "Leather", "Acoustics"],
    challenges: "The space needed to serve as both a high-end lounge for client meetings and a functional workspace, without sound bleed.",
    solutions: "Heavily baffled ceilings and felt-backed timber wall slats dampen sound effectively while adding to the 'members club' aesthetic.",
    narrative: "The focus here was acoustics and privacy. We used felt-backed timber slats and heavy velvet curtains to dampen sound, allowing for quiet deals in the middle of the city.",
    gallery: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80"
    ],
    craftDetails: [
        { image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=80", caption: "Felt-backed acoustic paneling." },
        { image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80", caption: "Saddle leather stitching details." },
        { image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80", caption: "Ambient floor lighting." },
        { image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=600&q=80", caption: "Smoked glass partitions." }
    ]
  },
  {
    id: '5',
    title: 'The Open Loft',
    location: 'Hitech City',
    type: 'Duplex',
    highlight: 'Double-height Curtains',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', 
    size: 'small',
    description: "This duplex renovation focused on connecting the two floors visually using volume and light.",
    year: "2023",
    area: "2,800 sq.ft",
    services: ["Renovation", "Soft Furnishings"],
    tags: ["Double Height", "Sheer Curtains", "Open Plan"],
    challenges: "The double-height living area created distinct echo issues and felt separated from the upper floor bedrooms.",
    solutions: "We installed floor-to-ceiling heavy linen curtains to dampen sound and visually link the vertical space, treating the window wall as a single canvas.",
    narrative: "Verticality was the theme. We wanted the eye to travel up. By treating the double-height window wall with a single, continuous sheer curtain track, we emphasized the volume while softening the harsh city light.",
    gallery: [
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    craftDetails: [
        { image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80", caption: "Motorized curtain tracks." },
        { image: "https://images.unsplash.com/photo-1507089947368-19c1da97ee9b?auto=format&fit=crop&w=600&q=80", caption: "Seamless glass railings." },
        { image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=600&q=80", caption: "Floating stair treads." },
        { image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=80", caption: "Custom rug texturing." }
    ]
  },
  {
    id: '6',
    title: 'Earthen Home',
    location: 'Kondapur',
    type: 'Villa Renovation',
    highlight: 'Sustainable Materials',
    imageUrl: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    size: 'small',
    description: "A renovation project centered on sustainability, reclaiming old teak and using lime plasters.",
    year: "2023",
    area: "3,500 sq.ft",
    services: ["Sustainable Design", "Civil Renovation"],
    tags: ["Reclaimed Teak", "Lime Plaster", "Handcrafted"],
    challenges: "The existing structure had dampness issues and poor cross-ventilation.",
    solutions: "We stripped the walls to brick, applied breathable lime plaster, and enlarged openings to create a passive cooling system.",
    narrative: "Old meets new. We salvaged teak beams from the demolition to create the vanity counters and coffee tables. The walls are finished in a traditional Araish lime plaster that keeps the interiors 3-4 degrees cooler than the outside.",
    gallery: [
         "https://images.unsplash.com/photo-1507089947368-19c1da97ee9b?auto=format&fit=crop&w=1200&q=80",
         "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
         "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
         "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80"
    ],
    craftDetails: [
        { image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80", caption: "Hand-applied lime plaster texture." },
        { image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=600&q=80", caption: "Reclaimed teak joinery." },
        { image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=600&q=80", caption: "Terracotta jali screens." },
        { image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=600&q=80", caption: "Brass inlay flooring details." }
    ],
    beforeAfter: {
        beforeImage: "https://images.unsplash.com/photo-1590362835106-4fec839897fb?auto=format&fit=crop&w=1200&q=80", // Construction / Raw State
        afterImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80",   // Finished State
        label: "Living Room Transformation"
    }
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Space Planning',
    description: 'Optimized layouts maximizing flow and utility.',
    iconName: 'Layout',
  },
  {
    id: '2',
    title: 'Civil Work',
    description: 'Structural changes, flooring, and wall treatments.',
    iconName: 'Hammer',
  },
  {
    id: '3',
    title: 'Lighting Design',
    description: 'Architectural and ambient lighting plans.',
    iconName: 'Lightbulb',
  },
  {
    id: '4',
    title: 'Custom Joinery',
    description: 'Bespoke wardrobes, kitchens, and vanity units.',
    iconName: 'PencilRuler',
  },
  {
    id: '5',
    title: 'Material Selection',
    description: 'Curation of stones, woods, fabrics, and metals.',
    iconName: 'Palette',
  },
  {
    id: '6',
    title: 'Execution',
    description: 'End-to-end project management and handover.',
    iconName: 'CheckCircle',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Spatial Diagnosis',
    description: 'We analyze not just the floor plan, but your daily rituals, flow, and needs.',
  },
  {
    id: 2,
    title: 'Material + Light Strategy',
    description: 'Developing a tactile palette and lighting plan that defines the mood before drawing walls.',
  },
  {
    id: 3,
    title: 'Technical Precision',
    description: 'GFC drawings, detailed BOQs, and joinery specifics. Nothing is left to chance.',
  },
  {
    id: 4,
    title: 'Site Management',
    description: 'Rigorous oversight of civil, electrical, and carpentry teams to ensure alignment with design.',
  },
  {
    id: 5,
    title: 'Curation & Handover',
    description: 'Final furniture, art placement, and styling. We stay until the last cushion is perfect.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: "They didn't just design a house; they interpreted how we wanted to live. The attention to the joinery details was exceptional.",
    author: "Rajesh & Meera",
    location: "My Home Bhooja, Hitech City",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 't2',
    text: "Professional, transparent with costs, and an absolute eye for premium materials. The process was surprisingly stress-free.",
    author: "Vikram Reddy",
    location: "Jayabheri Peak, Gachibowli",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80"
  }
];

export const CRAFT_DETAILS = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        caption: "Custom walnut veneer with 3mm shadow gaps."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80", // Fixed Broken Image
        caption: "Recessed cove lighting with diffused 3000K profile."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=600&q=80",
        caption: "Honed Italian Travertine wall cladding."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=600&q=80",
        caption: "Soft-close hardware concealed within joinery."
    }
];

export const FAQS: FAQItem[] = [
    {
        question: "What is your typical project timeline?",
        answer: "For a full-scope 3BHK or 4BHK interior project in Hyderabad, our timeline is typically 4-6 months from design approval. This includes civil work, joinery fabrication, and final styling. We value precision over speed."
    },
    {
        question: "Do you take up civil modifications?",
        answer: "Yes. We are not just decorators; we are interior architects. We handle flooring changes, wall breaking/realignment, bathroom renovations, and electrical/plumbing overhauls as part of our turnkey scope."
    },
    {
        question: "How do you charge for your design services?",
        answer: "We operate on a transparent design-fee plus execution model. Our design fee covers the concept, 3D visualizations, and technical GFC drawings. The execution is billed based on a detailed Bill of Quantities (BOQ) approved by you before work begins."
    },
    {
        question: "What budgets do you typically work with?",
        answer: "Our turnkey execution services are best suited for budgets starting from ₹40 Lakhs for apartments and ₹80 Lakhs for villas. This ensures we can use the premium materials (veneers, Italian marble, high-grade hardware) that define our aesthetic."
    }
];
