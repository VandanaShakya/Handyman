// mainPagesData.js
import { FaBath, FaTools, FaPaintRoller, FaUtensils, FaThLarge, FaWrench, FaPlug, FaTint, FaSeedling, FaRulerCombined, FaFillDrip, FaHammer } from "react-icons/fa";
import images from "../assets/images";

export const unitsData = [
  {
    slug: "bathroom-renovation",
    title: "BATHROOM RENOVATION",
    description:
      "Transform your bathroom into a modern, functional, and stylish space. Our handyman experts handle everything from fixture installation to complete bathroom makeovers with precision and care.",
    perfectFor: [
      "bathroom remodeling",
      "tile replacement",
      "shower and tub installation",
      "sink and vanity upgrades",
    ],
    image: images.bathroom4,
  },
  {
    slug: "plumbing-services",
    title: "PLUMBING SERVICES",
    description:
      "Our skilled plumbers provide reliable installation, repair, and maintenance services to ensure smooth water flow and leak-free systems throughout your property.",
    perfectFor: [
      "leak detection and repair",
      "pipe installation",
      "faucet and fixture replacement",
      "drain cleaning",
    ],
    image: images.plumbing6,
  },
  {
    slug: "flooring-installation",
    title: "FLOORING INSTALLATION",
    description:
      "Upgrade your space with expertly installed flooring. From hardwood and tiles to vinyl and laminate, we deliver flawless finishes that enhance the look and durability of your interiors.",
    perfectFor: [
      "tile flooring",
      "vinyl or laminate installation",
      "hardwood finishing",
      "floor repairs",
    ],
    image: images.flooring2,
  },
  {
    slug: "plastering-wall-finishing",
    title: "PLASTERING & WALL FINISHING",
    description:
      "Achieve smooth, durable, and crack-free walls with our professional plastering and finishing services. We handle all surface repairs, smoothing, and decorative plasterwork.",
    perfectFor: [
      "wall and ceiling plastering",
      "crack repair",
      "skim coating",
      "decorative wall finishes",
    ],
    image: images.plastering2,
  },
  {
    slug: "kitchen-renovation",
    title: "KITCHEN RENOVATION",
    description:
      "Revamp your kitchen into a functional and elegant space. Our team specializes in cabinetry, tiling, countertop installation, and modern layout design for a complete transformation.",
    perfectFor: [
      "cabinet installation",
      "backsplash tiling",
      "countertop fitting",
      "sink and tap replacement",
    ],
    image: images.kitchen3,
  },
];

export const serviceDetails = [
  {
    slug: "bathroom-renovation",
    heroTitle: "Bathroom Renovation Services",
    longDescription:
      "Our bathroom renovation experts specialize in creating modern, functional, and luxurious spaces. We manage everything from plumbing and tiling to lighting and waterproofing, ensuring a seamless transformation that fits your lifestyle and budget.",
    highlights: [
      "Complete bathroom remodeling",
      "Waterproofing and plumbing upgrades",
      "Premium tile and fixture installation",
      "Modern lighting and ventilation setup",
    ],
    checklist: [
      "Inspect current plumbing and drainage system",
      "Choose new fixtures and tiles",
      "Remove old fittings",
      "Install and finish with premium materials",
    ],
    gallery: [
      images.bathroom2,
      images.bathroom3,
      images.bathroom5
    ],
  },
  {
    slug: "plumbing-services",
    heroTitle: "Professional Plumbing Services",
    longDescription:
      "Our licensed plumbers handle all kinds of residential and commercial plumbing needs. From fixing leaks to complete system installations, we ensure efficiency and long-lasting performance with every job.",
    highlights: [
      "Pipe repair and replacement",
      "Water heater installation",
      "Bathroom and kitchen plumbing",
      "Leak detection and maintenance",
    ],
    checklist: [
      "Inspect for leaks or corrosion",
      "Replace or repair pipes and fittings",
      "Install faucets and fixtures",
      "Test and confirm water flow",
    ],
    gallery: [
      images.plumbing1,
      images.plumbing2,
      images.plumbing4,
    ],
  },
  {
    slug: "flooring-installation",
    heroTitle: "Expert Flooring Installation",
    longDescription:
      "Whether it’s elegant hardwood, durable tile, or budget-friendly vinyl, our flooring professionals deliver flawless installations that stand the test of time. We ensure level surfaces, tight seams, and perfect finishes for every project.",
    highlights: [
      "Tile, hardwood, and laminate flooring",
      "Custom pattern and design layouts",
      "Surface preparation and levelling",
      "Professional polishing and finishing",
    ],
    checklist: [
      "Select flooring material",
      "Prepare subfloor and remove debris",
      "Install and secure new flooring",
      "Finish with sealing or polishing",
    ],
    gallery: [
      images.flooring2,
      images.flooring3,
      images.flooring5,
    ],
  },
  {
    slug: "plastering-wall-finishing",
    heroTitle: "Plastering & Wall Finishing Services",
    longDescription:
      "Our plastering services ensure your walls are smooth, durable, and ready for painting or decorative finishes. We handle new builds, renovations, and repair jobs with precision and quality materials.",
    highlights: [
      "Interior and exterior plastering",
      "Crack repair and skim coating",
      "Decorative wall textures",
      "Moisture-resistant finishing",
    ],
    checklist: [
      "Clean and prepare wall surface",
      "Apply base and finish coats",
      "Smooth and cure plaster properly",
      "Final sanding and quality inspection",
    ],
    gallery: [
      images.plastering2,
      images.plastering3,
      images.plastering5,
    ],
  },
  {
    slug: "kitchen-renovation",
    heroTitle: "Complete Kitchen Renovation",
    longDescription:
      "Upgrade your kitchen with our complete renovation service — from layout planning to final installation. We deliver stylish, functional designs with custom cabinetry, tiling, and modern fixtures.",
    highlights: [
      "Cabinet and countertop installation",
      "Modern sink and plumbing setup",
      "Custom backsplash and lighting",
      "Full kitchen redesign service",
    ],
    checklist: [
      "Assess existing layout",
      "Plan design and materials",
      "Install cabinetry and fixtures",
      "Finalize finishes and quality check",
    ],
    gallery: [
      images.kitchen1,
      images.kitchen4,
      images.kitchen5,
    ],
  },
];


// reviews //
export const reviewsData = [
  {
    "reviewerName": "Sandy Rushton",
    "reviewerStatus": "Local Guide",
    "reviewsCount": 8,
    "rating": "⭐⭐⭐⭐",
    "timePosted": "a month ago",
    "serviceProvider": "David",
    "reviewText": "David was punctual, skilled, and respectful work we’d happily recommend.",
  },
  {
    "reviewerName": "Mark Benson",
    "reviewerStatus": "Verified Customer",
    "reviewsCount": 12,
    "rating": "⭐⭐⭐⭐⭐",
    "timePosted": "2 weeks ago",
    "serviceProvider": "David",
    "reviewText": "Excellent service, very professional and reliable.",
  },
  {
    "reviewerName": "Clara Jenkins",
    "reviewerStatus": "Frequent User",
    "reviewsCount": 5,
    "rating": "⭐⭐⭐⭐",
    "timePosted": "3 weeks ago",
    "serviceProvider": "David",
    "reviewText": "Quick, efficient, and very skilled in his work.",
  },
  {
    "reviewerName": "John Miller",
    "reviewerStatus": "Verified Customer",
    "reviewsCount": 20,
    "rating": "⭐⭐⭐⭐⭐",
    "timePosted": "a week ago",
    "serviceProvider": "David",
    "reviewText": "Great job! Will definitely use again.",
  },
  {
    "reviewerName": "Lisa Harper",
    "reviewerStatus": "Local Guide",
    "reviewsCount": 7,
    "rating": "⭐⭐⭐⭐",
    "timePosted": "2 months ago",
    "serviceProvider": "David",
    "reviewText": "Reliable and did a great job with the repair.",
  },
  {
    "reviewerName": "Ethan Clarke",
    "reviewerStatus": "Frequent User",
    "reviewsCount": 10,
    "rating": "⭐⭐⭐⭐⭐",
    "timePosted": "4 days ago",
    "serviceProvider": "David",
    "reviewText": "Punctual and highly skilled — highly recommended!",
  },
  {
    "reviewerName": "Sophia Turner",
    "reviewerStatus": "Verified Customer",
    "reviewsCount": 15,
    "rating": "⭐⭐⭐⭐",
    "timePosted": "3 weeks ago",
    "serviceProvider": "David",
    "reviewText": "Friendly, efficient, and professional work.",
  },
  {
    "reviewerName": "Liam Scott",
    "reviewerStatus": "Local Guide",
    "reviewsCount": 9,
    "rating": "⭐⭐⭐⭐⭐",
    "timePosted": "5 days ago",
    "serviceProvider": "David",
    "reviewText": "Excellent craftsmanship and attention to detail.",
  },
  {
    "reviewerName": "Olivia Evans",
    "reviewerStatus": "Frequent User",
    "reviewsCount": 6,
    "rating": "⭐⭐⭐⭐",
    "timePosted": "2 months ago",
    "serviceProvider": "David",
    "reviewText": "Very satisfied with the service provided.",
  },
  {
    "reviewerName": "James Wilson",
    "reviewerStatus": "Verified Customer",
    "reviewsCount": 13,
    "rating": "⭐⭐⭐⭐⭐",
    "timePosted": "1 week ago",
    "serviceProvider": "David",
    "reviewText": "Reliable and professional — highly recommend.",
  },
  {
    "reviewerName": "Emily Harris",
    "reviewerStatus": "Local Guide",
    "reviewsCount": 11,
    "rating": "⭐⭐⭐⭐",
    "timePosted": "a month ago",
    "serviceProvider": "David",
    "reviewText": "Friendly and efficient service.",
  },
  {
    "reviewerName": "Daniel Wright",
    "reviewerStatus": "Frequent User",
    "reviewsCount": 8,
    "rating": "⭐⭐⭐⭐⭐",
    "timePosted": "3 days ago",
    "serviceProvider": "David",
    "reviewText": "Highly skilled and punctual.",
  },
  {
    "reviewerName": "Grace Collins",
    "reviewerStatus": "Verified Customer",
    "reviewsCount": 14,
    "rating": "⭐⭐⭐⭐",
    "timePosted": "2 weeks ago",
    "serviceProvider": "David",
    "reviewText": "Excellent workmanship and great communication.",
  },
  {
    "reviewerName": "Henry Adams",
    "reviewerStatus": "Local Guide",
    "reviewsCount": 7,
    "rating": "⭐⭐⭐⭐⭐",
    "timePosted": "1 day ago",
    "serviceProvider": "David",
    "reviewText": "Quick, reliable, and friendly service.",
  },
  {
    "reviewerName": "Chloe Brooks",
    "reviewerStatus": "Frequent User",
    "reviewsCount": 9,
    "rating": "⭐⭐⭐⭐",
    "timePosted": "a month ago",
    "serviceProvider": "David",
    "reviewText": "Very efficient and skilled.",
  },
  {
    "reviewerName": "Noah Baker",
    "reviewerStatus": "Verified Customer",
    "reviewsCount": 10,
    "rating": "⭐⭐⭐⭐⭐",
    "timePosted": "5 days ago",
    "serviceProvider": "David",
    "reviewText": "Great service and excellent quality.",
  },
  {
    "reviewerName": "Ava Turner",
    "reviewerStatus": "Local Guide",
    "reviewsCount": 6,
    "rating": "⭐⭐⭐⭐",
    "timePosted": "2 weeks ago",
    "serviceProvider": "David",
    "reviewText": "Professional, reliable, and efficient.",
  },
  {
    "reviewerName": "William Foster",
    "reviewerStatus": "Frequent User",
    "reviewsCount": 12,
    "rating": "⭐⭐⭐⭐⭐",
    "timePosted": "4 days ago",
    "serviceProvider": "David",
    "reviewText": "Highly professional and skilled work.",
  },
  {
    "reviewerName": "Mia Carter",
    "reviewerStatus": "Verified Customer",
    "reviewsCount": 8,
    "rating": "⭐⭐⭐⭐",
    "timePosted": "a week ago",
    "serviceProvider": "David",
    "reviewText": "Very satisfied with David’s service.",
  },
  {
    "reviewerName": "Lucas Gray",
    "reviewerStatus": "Local Guide",
    "reviewsCount": 11,
    "rating": "⭐⭐⭐⭐⭐",
    "timePosted": "1 day ago",
    "serviceProvider": "David",
    "reviewText": "Reliable, skilled, and highly recommended.",
  }
];



// service data //

export const services = [
  { title: "BATHROOMS", icon: FaBath, link: "/bathrooms" },
  { title: "ODD JOBS", icon: FaTools, link: "/odd-jobs" },
  { title: "DECORATING", icon: FaPaintRoller, link: "/decorating" },
  { title: "KITCHENS", icon: FaUtensils, link: "/kitchen" },
  { title: "TILING", icon: FaThLarge, link: "/tiling" },
  { title: "REPAIRS", icon: FaWrench, link: "/repairs" },
  { title: "ELECTRICAL", icon: FaPlug, link: "/electrical" },
  { title: "PLUMBING", icon: FaTint, link: "/plumbing" },
  { title: "GARDENS", icon: FaSeedling, link: "/gardening" },
  { title: "FLOORING", icon: FaRulerCombined, link: "/flooring" },
  { title: "PLASTERING", icon: FaFillDrip, link: "/plastering" },
  { title: "CARPENTRY", icon: FaHammer, link: "/carpentry" },
  { title: "FLAT PACKING", icon: FaHammer, link: "/flat-packing" },
  { title: "TV MOUNT", icon: FaHammer, link: "/tv-mount" },
  { title: "PAINTING", icon: FaHammer, link: "/painting" },
  { title: "WALL PAPER", icon: FaHammer, link: "/wall-paper" },
  { title: "JOINERY", icon: FaHammer, link: "/joinery" },
  { title: "FENCING", icon: FaHammer, link: "/fencing" },
];
