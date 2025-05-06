import { storyblokEditable } from '@storyblok/react';
import { Link } from 'react-router';

export default function FeaturedArticles({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="featured-articles">
      <h2>Featured Articles</h2>
      <ul>
        {blok.articles.map((article) => (
          <li key={article.uuid}>
            <Link to={`/${article.full_slug}`}>{article.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
