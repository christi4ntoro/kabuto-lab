import { content } from '@/lib/content';

const t = content;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] p-4 md:p-8 pt-[68px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">{t.aboutPage.heading}</h1>

        <div className="space-y-8 text-xl text-[--muted] leading-relaxed">
          <p>{t.aboutPage.body1}</p>

          <p>{t.aboutPage.body2}</p>

          <div className="bg-[--surface] p-4 md:p-8 rounded-lg border border-[--border] my-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">{t.aboutPage.philosophyHeading}</h2>
            <ul className="space-y-4 text-lg">
              {t.aboutPage.philosophyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p>{t.aboutPage.body3}</p>

          <p className="text-2xl font-bold text-[--foreground] mt-12">
            {t.aboutPage.cta}
          </p>
        </div>
      </div>
    </div>
  );
}
