import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import {Button} from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 md:mr-30"> {/* Increased margin */}
          <Heading size="xxl">{slice.primary.heading}</Heading>
          <div className="prose prose-xl prose-slate prose-invert">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <div style={{ height: '12px' }} />
          <Button
            linkField={slice.primary.button_link}
            label={slice.primary.button_text}
          />
        </div>
        <div className="flex justify-center items-center md:w-1/2">
          <Avatar
            image={slice.primary.avatar}
            className="avatar-image w-80 h-80 md:w-96 md:h-96 ml-10" // Adjusted margin
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Biography;

