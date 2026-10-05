import { StoryblokBlocks } from '../storyblok';

export default function Page({ block, editable }) {
	return (
		<main {...editable}>
			{block.body && <StoryblokBlocks blocks={block.body} />}
		</main>
	);
}
