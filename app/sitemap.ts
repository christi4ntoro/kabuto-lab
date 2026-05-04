import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { getAllProducts } from '@/lib/productUtils';
import { getAllTutorials } from '@/lib/tutorials';

const BASE_URL = 'https://kabutolab.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    '/',
    '/about',
    '/work',
    '/transmissions',
    '/systems',
    '/tutorials',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().filter((post) => post.published !== false);
  const transmissionRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/transmissions/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));

  const products = getAllProducts().filter((product) => product.published !== false);
  const systemRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/systems/${product.slug}`,
    lastModified: new Date(),
  }));

  const tutorials = getAllTutorials().filter((tutorial) => tutorial.published !== false);
  const tutorialRoutes: MetadataRoute.Sitemap = tutorials.map((tutorial) => ({
    url: `${BASE_URL}/tutorials/${tutorial.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...transmissionRoutes, ...systemRoutes, ...tutorialRoutes];
}
