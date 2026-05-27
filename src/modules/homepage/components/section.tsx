const Section = ({
  id,
  name,
  children,
}: {
  id: string;
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className="my-8 md:my-16 lg:my-24 scroll-mt-16 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 w-screen bg-brand-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-xl uppercase font-bold tracking-wider text-brand-100 lg:sr-only">
          {name}
        </h2>
      </div>
      <div className="mt-2 md:mt-4">{children}</div>
    </section>
  );
};

export { Section };
