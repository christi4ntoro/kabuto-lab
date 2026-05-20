'use client';

import Image from 'next/image';
import { services } from '@/lib/services';
import { content } from '@/lib/content';

export default function ServicesSection() {
  const t = content;

  const serviceContent = [
    { title: t.services.service1Title, description: t.services.service1Description },
    { title: t.services.service2Title, description: t.services.service2Description },
    { title: t.services.service3Title, description: t.services.service3Description },
  ];

  return (
    <section className="px-4 py-16 md:px-20 md:py-24 bg-[--background]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="">
            <p>{t.services.sectionLabel}</p>
          </div>
          <div className="text-left mb-12 md:mb-16 md:col-start-2 md:col-span-2">
            <h2 className="text-4xl md:text-5xl text-[--foreground] mb-4">
              {t.services.heading}
            </h2>
            <p className="text-lg md:text-xl text-[--muted]">
              {t.services.subtext}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const sc = serviceContent[index];
            return (
              <div
                key={service.id}
                className="border border-white/20 rounded-lg p-8 bg-black/50 backdrop-blur hover:border-white/60 transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Image
                    src={service.iconImage}
                    alt={sc.title}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[--foreground] mb-3">
                  {sc.title}
                </h3>

                {/* Description */}
                <p className="text-[--muted] mb-6 text-lg leading-relaxed">
                  {sc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
