import { StoryblokBlocks } from '../storyblok';

export default function Grid({ block, editable }) {
	return (
		<div {...editable} className="grid">
			{block.columns && <StoryblokBlocks blocks={block.columns} />}
		</div>
	);
}
