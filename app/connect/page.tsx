import { content } from '@/lib/content';

const t = content;

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] p-4 md:p-8 pt-[68px]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold mb-8">{t.connect.heading}</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">{t.connect.sectionTitle}</h2>
            <p className="text-xl text-[--muted] mb-6">
              {t.connect.body}
            </p>
          </div>

          <div className="bg-[--surface] p-4 md:p-8 rounded-lg border border-[--border]">
            <h3 className="text-xl font-bold mb-4">{t.connect.emailLabel}</h3>
            <a
              href="mailto:christi4ntoro@gmail.com"
              className="text-base md:text-2xl break-all text-blue-400 hover:text-blue-300 transition-colors"
            >
              christi4ntoro@gmail.com
            </a>
          </div>

          <div className="bg-[--surface] p-8 rounded-lg border border-[--border]">
            <h3 className="text-xl font-bold mb-4">{t.connect.socialLabel}</h3>
            <div className="space-y-3">
              <a
                href="https://christi4ntoro.github.io/portfolio/Portfolio-ChristianRamirezToro.pdf"
                target="_blank"
                className="block text-lg text-blue-400 hover:text-blue-300 transition-colors"
              >
                {t.connect.portfolioLink}
              </a>
              <a
                href="https://www.linkedin.com/in/chrisrto/"
                target="_blank"
                className="block text-lg text-blue-400 hover:text-blue-300 transition-colors"
              >
                {t.connect.linkedInLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
