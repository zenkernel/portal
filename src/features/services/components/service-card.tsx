type ServiceCardProps = {
  title: string;
  tagline: string;
  description: string;
  highlights: readonly string[] | string[];
};

export function ServiceCard({ title, tagline, description, highlights }: ServiceCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">{tagline}</p>
      <h3 className="mt-2 text-2xl font-semibold text-zinc-900">{title}</h3>
      <p className="mt-4 flex-1 leading-relaxed text-zinc-600">{description}</p>
      <ul className="mt-6 space-y-2">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
