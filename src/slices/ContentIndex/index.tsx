import Heading from "@/components/Heading";
import { Content ,isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";
import Bounded from "@/components/Bounded";
import {createClient} from "@/prismicio"

/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex = async ({ slice }: ContentIndexProps): Promise<JSX.Element> => {

const client = createClient()
const blogPosts = await client.getAllByType("blog_post")
const project = await client.getAllByType("project")

const contentType =slice.primary.content_type || "Blog"
const items =contentType ==="Blog" ? blogPosts :project;

  return (
    <Bounded  
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="sm" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.descripition)  && (
        <div className="prose prose-md prose-invert mb-10">
          <PrismicRichText field ={slice.primary.descripition} />
        </div>
      )} 
       <ContentList
        items={items}
        contentType={slice.primary.content_type}
        viewMoreText={slice.primary.view_more_text}
        fallbackItemImage={slice.primary.fallback_item_image}
      />
      </Bounded>
  );
};

export default ContentIndex;
