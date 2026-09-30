import { StoryblokBlock } from '../storyblok';

export default function Page({ block, editable }) {
	return (
		<main {...editable}>
			{block.body?.map((nestedBlok, index) => (
				<StoryblokBlock block={nestedBlok} key={nestedBlok._uid || index} />
			))}
		</main>
	);
}
