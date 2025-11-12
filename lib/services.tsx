import { ReactNode } from 'react';

export interface ServicesHead {
  heading: ReactNode;
  subtext: ReactNode;
}

// Section content
export const servicesContent: ServicesHead = {
  heading: (
    <>
      Need a complete <strong>immersive experience</strong> designed and delivered?
    </>
  ),
  subtext: (
    <>
      Custom experience design from research to deployment. 
      <em>VR training</em> that changes behavior. 
      <strong>AR simulations</strong> that compress learning. 
      Mobile experiences that drive real transformation.
    </>
  )
};

export interface Service {
  id: string;
  iconImage: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export const services: Service[] = [
  {
    id: 'service-1',
    iconImage: '/services/full-experience-design.svg',
    title: 'Full Experience Design',
    description: 'Create experiences that captivate and engage your audience with cutting-edge design principles.',
    buttonText: 'Learn More',
    buttonUrl: '/services/full-experience-design'
  },
  {
    id: 'service-2',
    iconImage: '/services/service-02.svg',
    title: 'Strategic Design Consultation',
    description: 'Research-driven guidance for your existing immersive project. Architecture review + roadmap.',
    buttonText: 'Get Started',
    buttonUrl: '/services/prototyping'
  },
  {
    id: 'service-3',
    iconImage: '/services/service-03.svg',
    title: 'Research & Validation',
    description: 'Prove your experience works. Experimental design, data collection, impact measurement.',
    buttonText: 'Explore',
    buttonUrl: '/services/strategy'
  }
];



