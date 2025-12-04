import { getAllTutorials } from '@/lib/tutorials';
import TutorialCard from '@/components/ui/TutorialCard';

export const metadata = {
  title: 'Free Tutorials | Kabuto Lab',
  description: 'Learn immersive design with our free video tutorials on VR, AR, and spatial computing',
};

export default function TutorialsPage() {
  const tutorials = getAllTutorials();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Free Learning Resources
            </h1>
            <p className="text-xl text-gray-600">
              Master immersive design with our free video tutorials. Learn VR, AR, and spatial computing fundamentals at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {tutorials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tutorials available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <TutorialCard
                key={tutorial.slug}
                slug={tutorial.slug}
                title={tutorial.title}
                description={tutorial.description}
                duration={tutorial.duration}
                lessons={tutorial.lessons}
                level={tutorial.level}
                category={tutorial.category}
                tags={tutorial.tags}
                thumbnail={tutorial.thumbnail}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}