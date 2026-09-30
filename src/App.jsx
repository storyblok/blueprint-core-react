import { useParams } from 'react-router';
import { StoryblokBlock, useStoryblokStory } from './storyblok';
import { StoryblokPreview } from '@storyblok/react';

export default function App() {
	const currentYear = new Date().getFullYear();
	const { '*': slug } = useParams();

	const {
		data: story,
		isLoading,
		error,
	} = useStoryblokStory(slug || 'home', { query: { version: 'draft' } });

	if (error) return <div>Error: {error.message}</div>;

	if (isLoading || !story) return <div>Loading...</div>;

	return (
		<>
			<StoryblokPreview
				key={story.uuid}
				story={story}
				renderContent={(live) => <StoryblokBlock block={live.content} />}
			/>
			<footer>All rights reserved © {currentYear}</footer>
		</>
	);
}
