import Link from 'next/link';
import Image from 'next/image';

interface TutorialCardProps {
  slug: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  thumbnail: string;
}

export default function TutorialCard({
  slug,
  title,
  description,
  duration,
  lessons,
  level,
  category,
  tags,
  thumbnail,
}: TutorialCardProps) {
  // Level badge colors
  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  return (
    <Link 
      href={`/tutorials/${slug}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-gray-200">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Level badge overlay */}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category & Meta */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span className="font-medium text-gray-700">{category}</span>
          <span>•</span>
          <span>{duration}</span>
          <span>•</span>
          <span>{lessons} lessons</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-1 text-gray-500 text-xs">
              +{tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}