import { storyblokEditable } from '@storyblok/react';

export default function Feature({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="feature">
      <h3>{blok.name}</h3>
    </div>
  );
}
