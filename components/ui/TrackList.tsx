type Tag = 'abstract' | 'feeling' | 'hybrid';

type Track = {
  number: number;
  title: string;
  bpm: number;
  tag: Tag;
};

type TrackListProps = {
  tracks: Track[];
};

const TAG_STYLES: Record<Tag, { background: string; color: string }> = {
  abstract: { background: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc' },
  feeling:  { background: 'rgba(236, 72, 153, 0.15)', color: '#f9a8d4' },
  hybrid:   { background: 'rgba(74, 222, 128, 0.12)', color: '#86efac' },
};

export default function TrackList({ tracks }: TrackListProps) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: '1.5rem 0',
        fontFamily: 'var(--font-geist-sans, sans-serif)',
        fontSize: '0.875rem',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            {['#', 'Title', 'BPM', 'Tag'].map((h) => (
              <th
                key={h}
                style={{
                  padding: '0.625rem 0.875rem',
                  textAlign: 'left',
                  color: 'var(--muted)',
                  fontWeight: 500,
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, i) => (
            <tr
              key={track.number}
              style={{
                borderBottom: i < tracks.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <td
                style={{
                  padding: '0.625rem 0.875rem',
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-jetbrains-mono, monospace)',
                  fontSize: '0.75rem',
                  width: '2.5rem',
                }}
              >
                {String(track.number).padStart(2, '0')}
              </td>
              <td style={{ padding: '0.625rem 0.875rem', color: 'var(--foreground)', fontWeight: 500 }}>
                {track.title}
              </td>
              <td
                style={{
                  padding: '0.625rem 0.875rem',
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-jetbrains-mono, monospace)',
                  fontSize: '0.8rem',
                }}
              >
                {track.bpm}
              </td>
              <td style={{ padding: '0.625rem 0.875rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '999px',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    ...TAG_STYLES[track.tag],
                  }}
                >
                  {track.tag}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
