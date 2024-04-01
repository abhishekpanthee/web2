import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, DateField, isFilled } from "@prismicio/client";


export default function ContentBody({
  page,
}: {
  page: Content.BlogPostDocument | Content.ProjectDocument;
}) {
  function formatDate(date: DateField) {
      if (isFilled.date(date)) {
          const dateoptions: Intl.DateTimeFormatOptions = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
          };
          return new Intl.DateTimeFormat("en-US", dateoptions).format(new Date(date));
      }
  }
  const formattedDate = formatDate(page.data.date);

  return (
      <Bounded as="article">
          <div className="rounded-2xl border-2 border-slate-800 bg-sky-500 px-4 py-15 md:px-8 md:py-20">
              <Heading as="h2">{page.data.title}</Heading>
              <div style={{ height: '12px' }} />
              <div className="flex gap-4 text-yellow-500 text-sm font-bold">
                  {page.tags.map((tag) => (
                      <span key={tag} style={{ marginRight: '8px', marginBottom: '8px'}}> {tag}</span>
                  ))}
              </div>
              <div style={{ height: '12px' }} />
              <SliceZone slices={page.data.slices} components={components} />
              <div style={{ height: '12px' }} />
              <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20"></div>
              <p className="mt-8 border-b border-slate-900 text-xl font-medium text-slate-600">
                  {formattedDate}
              </p>
          </div>
      </Bounded>
  );
  
}
