import Link from 'next/link';

export default function SignalStrip() {
  return (
    <section className="bg-[--background] py-10 px-4 text-center">
      <div className="max-w-2xl mx-auto flex flex-col gap-4" style={{ fontFamily: 'var(--font-geist-mono)' }}>
        <p className="text-sm text-white/60 tracking-wide">
          MSc Interaction Design · Universidade de Lisboa
        </p>
        <hr className="border-white/10" />
        <p className="text-sm text-white/60 tracking-wide">
          EIMAD 2026 · BoREAL: VR for stress mitigation
        </p>
        <hr className="border-white/10" />
        <p className="text-sm text-white/60 tracking-wide">
          <Link
            href="https://youtube.com/@kabutolab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            @kabutolab
          </Link>
          {' · Unity · Meta Quest · VR tutorials'}
        </p>
      </div>
    </section>
  );
}
