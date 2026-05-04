import type { MDXComponents } from 'mdx/types';
import YouTube from '@/components/ui/YouTube';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    YouTube,
    ...components,
  };
}
