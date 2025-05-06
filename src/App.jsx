import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import { useParams } from 'react-router';

export default function App() {
	const { '*': slug } = useParams();
	const story = useStoryblok(slug || 'home', {
		version: 'draft',
		resolve_relations: 'featured_articles.articles',
	});
	if (!story?.content) {
		return <div>Loading...</div>;
	}
	return <StoryblokComponent blok={story.content} />;
}
