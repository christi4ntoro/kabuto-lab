interface YouTubeProps {
  id: string;
}

export default function YouTube({ id }: YouTubeProps) {
  return (
    <div className="relative w-full aspect-video my-6">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full rounded-lg"
        style={{ border: 'none' }}
      />
    </div>
  );
}
