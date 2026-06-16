type Props = {
  eyebrow: string;
  title?: string;
};

export function SectionHeading({ eyebrow, title }: Props) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex rounded-full border border-[#D4A017]/30 bg-[#D4A017]/8 px-4 py-2 text-sm uppercase tracking-[0.24em] text-[#f6d992]">
        {eyebrow}
      </div>
      {title ? (
        <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
          {title}
        </h2>
      ) : null}
    </div>
  );
}
