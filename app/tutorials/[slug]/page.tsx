import { getTutorialBySlug, getAllTutorials, markdownToHtml } from '@/lib/tutorials';
import CustomVideoPlayer from '@/components/tutorials/CustomVideoPlayer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  try {
    const tutorial = getTutorialBySlug(slug);
    return {
      title: tutorial.title,
      description: tutorial.description,
      openGraph: {
        title: tutorial.title,
        description: tutorial.description,
        images: tutorial.thumbnail ? [tutorial.thumbnail] : [],
      },
    };
  } catch {
    return { title: 'Tutorial not found | Kabuto Lab' };
  }
}

export async function generateStaticParams() {
  const tutorials = getAllTutorials();
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }));
}

export default async function TutorialPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);
  
  if (!tutorial || tutorial.published === false) {
    notFound();
  }
  
  const contentHtml = await markdownToHtml(tutorial.content);
  
  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };
  
  return (
    <div className="min-h-screen bg-[--background]">
      {/* Header */}
      <div className="bg-[--surface] border-b border-[--border]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/tutorials"
            className="text-blue-600 hover:text-blue-700 transition-colors mb-6 inline-block"
          >
            ← Back to tutorials
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[tutorial.level]}`}>
              {tutorial.level}
            </span>
            <span className="text-[--muted] text-sm">{tutorial.category}</span>
            <span className="text-[--muted] text-sm">•</span>
            <span className="text-[--muted] text-sm">{tutorial.duration}</span>
            <span className="text-[--muted] text-sm">•</span>
            <span className="text-[--muted] text-sm">{tutorial.lessons} lessons</span>
          </div>
          
          <h1 className="text-4xl font-bold text-[--foreground] mb-4">{tutorial.title}</h1>
          <p className="text-xl text-[--muted] mb-6">{tutorial.description}</p>
          
          {tutorial.tags && tutorial.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tutorial.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[--surface-alt] text-[--muted] rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Video Player Section */}
        {tutorial.videos && tutorial.videos.length > 0 ? (
          <div className="mb-12">
            <CustomVideoPlayer 
              videos={tutorial.videos} 
              playlistTitle={tutorial.title}
            />
          </div>
        ) : tutorial.youtubePlaylistId ? (
          <div className="mb-12">
            <div className="relative w-full aspect-video bg-[--background] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${tutorial.youtubePlaylistId}`}
                title={tutorial.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        ) : null}

        {/* Markdown Content */}
        <div className="bg-[--surface] rounded-lg shadow-sm p-8">
          <div
            className="prose prose-lg max-w-none
                       prose-headings:text-[--foreground] prose-headings:font-bold
                       prose-p:text-[--muted] prose-p:leading-relaxed
                       prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700
                       prose-strong:text-[--foreground]
                       prose-ul:text-[--muted]
                       prose-li:my-2"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}
