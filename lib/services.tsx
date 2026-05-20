import { ReactNode } from 'react';

export interface ServicesHead {
  heading: ReactNode;
  subtext: ReactNode;
}

export interface Service {
  id: string;
  iconImage: string;
  title: string;
  description: string;
  buttonText: string;
}

export const services: Service[] = [
  {
    id: 'service-1',
    iconImage: '/services/full-experience-design.svg',
    title: 'Full Experience Design',
    description: 'Create experiences that captivate and engage your audience with cutting-edge design principles.',
    buttonText: 'Learn More',
  },
  {
    id: 'service-2',
    iconImage: '/services/service-02.svg',
    title: 'Strategic Design Consultation',
    description: 'Research-driven guidance for your existing immersive project. Architecture review + roadmap.',
    buttonText: 'Get Started',
  },
  {
    id: 'service-3',
    iconImage: '/services/service-03.svg',
    title: 'Research & Validation',
    description: 'Prove your experience works. Experimental design, data collection, impact measurement.',
    buttonText: 'Explore',
  }
];
