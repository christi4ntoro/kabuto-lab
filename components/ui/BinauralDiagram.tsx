type BinauralDiagramProps = {
  leftHz: number;
  rightHz: number;
  resultHz: number;
  waveLabel: string;
};

export default function BinauralDiagram({ leftHz, rightHz, resultHz, waveLabel }: BinauralDiagramProps) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '1.5rem',
        fontFamily: 'var(--font-jetbrains-mono, monospace)',
        fontSize: '0.875rem',
        margin: '1.5rem 0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Left ear */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ color: 'var(--muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Left ear
          </span>
          <div
            style={{
              border: '1px solid var(--border)',
              borderRadius: '4px',
              padding: '0.5rem 0.875rem',
              color: 'var(--foreground)',
              whiteSpace: 'nowrap',
            }}
          >
            {leftHz} Hz
          </div>
        </div>

        {/* Arrow */}
        <div style={{ color: 'var(--muted)', fontSize: '1.25rem', lineHeight: 1, marginTop: '1.25rem' }}>⊕</div>

        {/* Right ear */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ color: 'var(--muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Right ear
          </span>
          <div
            style={{
              border: '1px solid var(--border)',
              borderRadius: '4px',
              padding: '0.5rem 0.875rem',
              color: 'var(--foreground)',
              whiteSpace: 'nowrap',
            }}
          >
            {rightHz} Hz
          </div>
        </div>

        {/* Arrow */}
        <div style={{ color: 'var(--muted)', fontSize: '1.25rem', lineHeight: 1, marginTop: '1.25rem' }}>→</div>

        {/* Perceived frequency */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ color: 'var(--muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Perceived
          </span>
          <div
            style={{
              border: '1px solid rgba(74, 222, 128, 0.4)',
              borderRadius: '4px',
              padding: '0.5rem 0.875rem',
              color: '#4ade80',
              whiteSpace: 'nowrap',
            }}
          >
            {resultHz} Hz
          </div>
        </div>
      </div>

      {/* Wave label */}
      <div
        style={{
          marginTop: '1rem',
          paddingTop: '0.875rem',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
          color: 'var(--muted)',
          fontSize: '0.75rem',
        }}
      >
        <span style={{ color: '#4ade80', marginRight: '0.4rem' }}>~</span>
        {waveLabel}
      </div>
    </div>
  );
}
