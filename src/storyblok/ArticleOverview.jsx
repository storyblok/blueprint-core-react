import { useStoryblokApi } from '@storyblok/react';
import { use, Suspense, useMemo } from 'react';
import { Link } from 'react-router';

export default function ArticleOverview() {
  const storyblokApi = useStoryblokApi();
  const articlesPromise = useMemo(() => {
    return storyblokApi.getAll('cdn/stories', {
      version: 'draft',
      starts_with: 'articles',
      content_type: 'article',
    });
  }, [storyblokApi]);

  return (
    <div>
      <h2>Articles</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <ul>
          <ArticleList getArticles={articlesPromise} />
        </ul>
      </Suspense>
    </div>
  );
}

export function ArticleList({ getArticles }) {
  const articles = use(getArticles);

  return articles.map((article) => (
    <li key={article.uuid}>
      <Link to={`/${article.full_slug}`}>{article.name}</Link>
    </li>
  ));
}
