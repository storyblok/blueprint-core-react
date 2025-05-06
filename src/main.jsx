import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './index.css';
import App from './App.jsx';
import { storyblokInit, apiPlugin } from '@storyblok/react';

import Page from './storyblok/Page';
import Teaser from './storyblok/Teaser';
import Feature from './storyblok/Feature';
import Grid from './storyblok/Grid';
import Article from './storyblok/Article';
import ArticleOverview from './storyblok/ArticleOverview';
import FeaturedArticles from './storyblok/FeaturedArticles';

storyblokInit({
	accessToken: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
	use: [apiPlugin],
	components: {
		page: Page,
		teaser: Teaser,
		feature: Feature,
		grid: Grid,
		article: Article,
		article_overview: ArticleOverview,
		featured_articles: FeaturedArticles,
	},
	enableFallbackComponent: true,
	apiOptions: {
		region: 'eu', // "eu" is the default region
	},
});
const router = createBrowserRouter([
	{
		path: '/*',
		Component: App,
	},
]);
const root = document.getElementById('root');

createRoot(root).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
