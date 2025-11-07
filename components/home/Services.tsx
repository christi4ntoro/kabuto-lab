import Link from 'next/link';
import { services, servicesContent } from '@/lib/services';

export default function ServicesSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {servicesContent.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {servicesContent.subtext}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => {
            const IconComponent = service.iconComponent;
            return (
              <div
                key={service.id}
                className="border border-white/20 rounded-lg p-8 bg-black/50 backdrop-blur hover:border-white/60 transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className="mb-6 text-blue-400">
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {service.description}
              </p>

                {/* Button */}
                <Link
                  href={service.buttonUrl}
                  className="inline-block bg-white text-black px-6 py-3 font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  {service.buttonText} →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}