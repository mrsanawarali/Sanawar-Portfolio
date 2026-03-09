export default function SectionTitle({ title, accent }) {
  return (
    <h2 className="mb-8 text-3xl font-black text-slate-100 sm:text-4xl">
      {title} <span className="text-primary">{accent}</span>
    </h2>
  );
}
