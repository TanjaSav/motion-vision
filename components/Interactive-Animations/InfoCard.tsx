type InfoCardProps = {
  title: string;
  text: string;
};

// Small reusable card for supporting informational content.
export default function InfoCard({ title, text }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="mb-2 text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm leading-6 text-white/60">
        {text}
      </p>
    </div>
  );
}