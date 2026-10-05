import { StoryblokPreview } from '@storyblok/react';
import { useParams } from 'react-router';
import { StoryblokBlock, useStoryblokStory } from './storyblok';

export default function App() {
	const currentYear = new Date().getFullYear();
	const { '*': slug } = useParams();
	const { data: story, error, isLoading } = useStoryblokStory(slug || 'home');

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error || !story) {
		return <div>Story not found.</div>;
	}
	return (
		<>
			<StoryblokPreview
				story={story}
				renderContent={(live) =>
					live.content ? <StoryblokBlock block={live.content} /> : null
				}
			/>
			<footer>All rights reserved © {currentYear}</footer>
		</>
	);
}
