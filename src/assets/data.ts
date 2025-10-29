export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

// export interface TeamMember {
//   id: number;
//   name: string;
//   role: string;
//   bio: string;
//   imageUrl: string;
// }

export interface ServiceIcon {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FuelType {
  id: number;
  name: string;
  spec: string;
  imageUrl: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  slug: string;
}

export const timelineItems: TimelineItem[] = [
  {
    date: '2010',
    title: 'Company Founding',
    description: 'Just Tranzact was established to provide innovative solutions in both energy and safety sectors.'
  },
  {
    date: '2009',
    title: 'Launch of Energy Division',
    description: 'Just Tranzact Energy Ltd. was formed to focus on sustainable energy solutions for businesses.'
  },
  {
    date: '2025',
    title: 'launch of Portwest',
    description: 'launched Portwest to offer premium safety equipment and solutions.'
  },
  {
    date: '2025',
    title: 'Expansion of Services',
    description: 'Major expansion of service offerings across all divisions to meet growing market demands.'
  },
  // {
  //   // date: '2025',
  //   // title: 'Digital Transformation',
  //   // description: 'Launch of integrated digital platforms to enhance customer experience across all divisions.'
  // }
];

export const teamMembers: TeamMember[] = [
  {
    // id: 1,
    // name: 'James Wilson',
    // role: 'CEO & Founder',
    // bio: 'Industry veteran with over 20 years of experience in energy and safety solutions.',
    // imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    // id: 2,
    // name: 'Sarah Johnson',
    // role: 'Director of Safety Solutions',
    // bio: 'Safety expert with strong background in regulatory compliance and training.',
    // imageUrl: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    // id: 3,
    // name: 'Michael Chen',
    // role: 'Head of Energy Division',
    // bio: 'Specialist in sustainable energy solutions with focus on efficiency and innovation.',
    // imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    // id: 4,
    // name: 'Emily Rodriguez',
    // role: 'Retail Operations Manager',
    // bio: 'Retail expert overseeing the Portwest Safety Shop operations and customer experience.',
    // imageUrl: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    // id: 5,
    // name: 'David Singh',
    // role: 'Technical Director',
    // bio: 'Engineering specialist ensuring highest quality standards across all product lines.',
    // imageUrl: 'https://images.pexels.com/photos/2426551/pexels-photo-2426551.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    // id: 6,
    // name: 'Lauren Wright',
    // role: 'Customer Relations',
    // bio: 'Dedicated to exceptional service delivery and maintaining strong client relationships.',
    // imageUrl: 'https://images.pexels.com/photos/1699419/pexels-photo-1699419.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const serviceIcons: ServiceIcon[] = [
  {
    id: 1,
    title: 'Safety Solutions',
    description: 'Comprehensive safety equipment and training services for various industries, ensuring workplace compliance and protection.',
    icon: 'ShieldCheck'
  },
  {
    id: 2,
    title: 'Energy Solutions',
    description: 'Efficient and sustainable energy products and services designed to optimize consumption and reduce environmental impact.',
    icon: 'Zap'
  },
  {
    id: 3,
    title: 'Safety Shop',
    description: 'Premium Portwest safety gear and equipment available through our specialized retail outlet with expert guidance.',
    icon: 'Store'
  }
];

export const fuelTypes: FuelType[] = [
  {
    id: 1,
    name: 'Premium Diesel',
    spec: 'Ultra-low sulfur content, suitable for modern diesel engines',
    imageUrl: 'https://media.istockphoto.com/id/1447640636/photo/oil-field-site-in-the-evening-oil-pumps-are-running-the-oil-pump-and-the-beautiful-sunset.jpg?b=1&s=612x612&w=0&k=20&c=2TYv2iE3ng3ZrI_cxSTZguwDBOpB7VgY9qVAokUuX7Q='
  },
  {
    id: 2,
    name: 'Regular Gasoline',
    spec: '87 octane rating, standard for most passenger vehicles',
    imageUrl: 'https://media.istockphoto.com/id/1381376333/photo/oil-refinery-and-pipeline.jpg?b=1&s=612x612&w=0&k=20&c=Ni5C1S6qBOg0yNblS-SpXNEnfzTul0B1ZO09YpWJFds='
  },
  {
    id: 3,
    name: 'Premium Gasoline',
    spec: '93 octane rating, ideal for high-performance engines',
    imageUrl: 'https://media.istockphoto.com/id/1414566486/photo/working-at-refinery-oil-production-platform.jpg?b=1&s=612x612&w=0&k=20&c=D-4pc9a8joc3HTQEB84LTAWV87vOhvtUnMUk8FQW__8='
  },
  {
    id: 4,
    name: 'Biofuel Blend',
    spec: 'Eco-friendly blend of traditional fuel with renewable sources',
    imageUrl: 'https://media.istockphoto.com/id/517340891/photo/oil-pipeline-in-industrial-district-with-factories-at-dusk.jpg?b=1&s=612x612&w=0&k=20&c=dSLi5C4vsxwyarCKo1-yE2gAp0ObfltWqJEqvI6yzN4='
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What types of safety gear do you offer?',
    answer: 'We offer a comprehensive range of Portwest safety gear including high-visibility clothing, protective footwear, hand protection, eye protection, respiratory equipment, fall protection, and specialized industry-specific safety solutions.'
  },
  {
    id: 2,
    question: 'Do you provide customization for corporate orders?',
    answer: 'Yes, we provide customization services for corporate orders, including logo printing, specialized color schemes, and bulk purchasing options with dedicated account management.'
  },
  {
    id: 3,
    question: 'Can I visit your showroom before purchasing?',
    answer: 'Absolutely! Our showroom is open Monday through Friday from 9am to 5pm, and Saturdays from 10am to 3pm. No appointment is necessary, but we recommend calling ahead for specialized consultations.'
  },
  {
    id: 4,
    question: 'Do you offer safety training along with equipment?',
    answer: 'Yes, we provide comprehensive safety training programs to complement our equipment offerings, ensuring your team is both properly equipped and knowledgeable about safety best practices.'
  },
  {
    id: 5,
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy on unused items in original packaging. Custom orders may be subject to different terms. Please contact our customer service team for specific return requirements.'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Manufacturing Plant Energy Optimization',
    summary: 'Reduced energy consumption by 30% for a major manufacturing facility through comprehensive fuel management solutions and process optimization.',
    imageUrl: 'https://www.dexma.com/wp-content/uploads/2023/05/EN-WP-Manufacturing-launch-featured-image.png',
    slug: 'manufacturing-energy-optimization'
  },
  {
    id: 2,
    title: 'Fleet Efficiency Program',
    summary: 'Implemented advanced fuel monitoring and quality control measures for a transportation company, resulting in 20% cost savings and reduced environmental impact.',
    imageUrl: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=300',
    slug: 'fleet-efficiency-program'
  },
  {
    id: 3,
    title: 'Sustainable Energy Transition',
    summary: 'Guided a commercial property developer through transition to biofuel solutions, achieving compliance with new environmental regulations while maintaining performance.',
    imageUrl: 'https://sustainableeconomyng.com/wp-content/uploads/2021/07/sustainable_energy_transition-800x578.jpg',
    slug: 'sustainable-energy-transition'
  }
];

export const safetyProducts = [
  {
    id: 1,
    name: 'High-Visibility Safety Vest',
    category: 'Workwear',
    imageUrl: 'https://safeworkwear.co.uk/wp-content/uploads/2020/03/Korntex-Childrens-Vest-0.jpg'
  },
  {
    id: 2,
    name: 'Professional Safety Helmet',
    category: 'Head Protection',
    imageUrl: 'https://m.media-amazon.com/images/I/51c++FYmIWL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 3,
    name: 'Cut-Resistant Gloves',
    category: 'Hand Protection',
    imageUrl: 'https://ordersafety.com/wp-content/uploads/2020/08/ree.png'
  },
  {
    id: 4,
    name: 'Safety Eyewear',
    category: 'Eye Protection',
    imageUrl: 'https://images-cdn.ubuy.qa/634eb51ff9a26f0be259ac93-honeywell-home-uvex-s1650df-carbon.jpg'
  },
  {
    id: 5,
    name: 'Protective Footwear',
    category: 'Foot Protection',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4c--oi4MfvbE6MgATmRxlxo4FbluDN3uqPw&s'
  },
  {
    id: 6,
    name: 'Respiratory Mask',
    category: 'Respiratory Protection',
    imageUrl: 'https://media.istockphoto.com/id/506713291/photo/chemical-protective-mask.jpg?s=612x612&w=0&k=20&c=kvDU_SkrN-7MshoofdZaVSOySctuFPOFltjzdsZ9G3E='
  }
];
