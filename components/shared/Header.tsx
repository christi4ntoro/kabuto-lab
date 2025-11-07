  import Link from 'next/link';
  import Image from 'next/image';

  export default function Header() {
    return (
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className=""
          >
            <Image 
              src="/shared/logo-white.svg"
              alt="KabutoLab™"
              width={100}
              height={100}
              priority
            />
          </Link>
          
          <div className="flex gap-8">
            <Link 
              href="/products" 
              className="text-lg hover:text-blue-400 transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="text-lg hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-lg hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/blog" 
              className="text-lg hover:text-blue-400 transition-colors"
            >
              Blog
            </Link>
          </div>
        </nav>
      </header>
    )
  }