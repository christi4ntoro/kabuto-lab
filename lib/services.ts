import { LucideIcon } from 'lucide-react';
import { Sparkles, Zap, Target, Layers } from 'lucide-react';

export interface Service {
  id: string;
  iconComponent: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export const services: Service[] = [
  {
    id: 'service-1',
    iconComponent: Sparkles,
    title: 'Immersive Design',
    description: 'Create experiences that captivate and engage your audience with cutting-edge design principles.',
    buttonText: 'Learn More',
    buttonUrl: '/services/immersive-design'
  },
  {
    id: 'service-2',
    iconComponent: Zap,
    title: 'Rapid Prototyping',
    description: 'Transform ideas into interactive prototypes in days, not weeks. Fast iteration, better results.',
    buttonText: 'Get Started',
    buttonUrl: '/services/prototyping'
  },
  {
    id: 'service-3',
    iconComponent: Target,
    title: 'Strategy & Planning',
    description: 'Data-driven strategies that align your vision with measurable business outcomes.',
    buttonText: 'Explore',
    buttonUrl: '/services/strategy'
  },
  {
    id: 'service-4',
    iconComponent: Layers,
    title: 'Full Production',
    description: 'End-to-end production services from concept to launch. We handle the complexity.',
    buttonText: 'View Work',
    buttonUrl: '/services/production'
  }
];

// Section content
export const servicesContent = {
  heading: 'What We Do',
  subtext: 'Comprehensive services for immersive experience design'
};

