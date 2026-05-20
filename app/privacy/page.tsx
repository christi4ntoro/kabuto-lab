import { content } from '@/lib/content';

const t = content;

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[--background] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[--foreground] mb-8">{t.privacy.heading}</h1>

        <div className="prose prose-lg">
          <h2>{t.privacy.cookieTitle}</h2>
          <p>{t.privacy.cookieBody}</p>

          <h2>{t.privacy.trackTitle}</h2>
          <ul>
            <li>{t.privacy.trackItem1}</li>
            <li>{t.privacy.trackItem2}</li>
            <li>{t.privacy.trackItem3}</li>
            <li>{t.privacy.trackItem4}</li>
          </ul>

          <h2>{t.privacy.choicesTitle}</h2>
          <p>{t.privacy.choicesBody}</p>

          <h2>{t.privacy.contactTitle}</h2>
          <p>{t.privacy.contactBody}</p>
        </div>
      </div>
    </div>
  );
}
