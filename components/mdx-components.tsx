import type { MDXComponents } from 'mdx/types';
import YouTube from '@/components/ui/YouTube';
import BinauralDiagram from '@/components/ui/BinauralDiagram';
import TrackList from '@/components/ui/TrackList';

export const mdxComponents: MDXComponents = {
  YouTube,
  BinauralDiagram,
  TrackList,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...components };
}
