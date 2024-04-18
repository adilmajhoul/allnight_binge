export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" flex flex-col items-center justify-center gap-4 py-8 md:py-10 border-2 border-red-600">
      <div className="inline-block max-w-lg text-center justify-center border-2 border-blue-600">
        {children}
      </div>
    </section>
  );
}
