import { StoryblokBlock } from '../storyblok';

export default function Grid({ block, editable }) {
	return (
		<div {...editable} className="grid">
			{block.columns.map((nestedBlok) => (
				<StoryblokBlock block={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	);
}
