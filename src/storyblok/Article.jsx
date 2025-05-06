import { storyblokEditable, StoryblokRichText } from '@storyblok/react';

export default function Article({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="article">
      <h1>{blok.title}</h1>
      <StoryblokRichText doc={blok.content} />
    </div>
  );
}
