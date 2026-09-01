import { ArrowLink } from "@/src/shared/ui/components";
import { Heading, Paragraph } from "@/src/shared/ui/typography";

const NotFound = () => (
  <div className="flex flex-col gap-2 h-screen items-center justify-center text-center">
    <Heading className="lg:text-6xl md:text-4xl text-2xl font-bold">
      Woah, how did you get here???
    </Heading>
    <Paragraph className="mb-4 mt-2 md:mt-4 md:mb-10">
      Sorry, but I got nothing for you on this page
    </Paragraph>
    <ArrowLink href="/" isNextLink text="Go to Homepage" />
  </div>
);

export default NotFound;
