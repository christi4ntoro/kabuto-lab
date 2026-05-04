import Link from 'next/link';

export default function AboutStrip() {
  return (
    <section className="bg-[--background] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Kabuto Lab is the practice of Christian Ramírez Toro — interaction designer, HCI researcher, and builder based in Lisbon. 15 years working at the edges of design, behavior, and technology. Currently building Avatar Lab, researching immersive environments for human wellbeing, and finishing a new Galea record. The work moves across fields because the problems do too.
        </p>
        <div className="flex flex-wrap gap-6 justify-center" style={{ fontFamily: 'var(--font-geist-mono)' }}>
          <Link
            href="https://youtube.com/@GaleaAlchemist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Galea on YouTube ↗
          </Link>
          <Link
            href="https://youtube.com/@kabutolab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            VR Tutorials ↗
          </Link>
          <Link
            href="/connect"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            CV / Portfolio PDF ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
