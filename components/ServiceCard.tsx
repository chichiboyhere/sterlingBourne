export default function ServiceCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 border border-slate-200 hover:border-amber-500 transition-colors">
      <h3 className="text-2xl font-serif mb-4">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}
