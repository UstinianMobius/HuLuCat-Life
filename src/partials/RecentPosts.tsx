import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  BlogGallery,
  GradientText,
  Section,
} from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          生活 <GradientText>记录</GradientText>
        </div>

        {/* <div className="text-sm">
          <a href="/">View all Posts →</a>
        </div> */}
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
