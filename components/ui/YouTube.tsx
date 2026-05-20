interface YouTubeProps {
  id: string;
}

export default function YouTube({ id }: YouTubeProps) {
  return (
    <div className="w-full my-8 rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full aspect-video"
      />
    </div>
  );
}
