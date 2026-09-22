import { Reveal } from "./Reveal";

/**
 * Section marker: a solid square, the section name, and an optional right-hand
 * note, all sitting on a hairline. Repeating this is what gives the page its
 * structure.
 */
export function SectionHeading({
  id,
  label,
  note,
}: {
  id?: string;
  label: string;
  note?: string;
}) {
  return (
    <Reveal className="rule-b flex items-center justify-between gap-6 py-5">
      <h2 className="flex items-center gap-3">
        <span aria-hidden="true" className="h-3 w-[0.3rem] bg-ink" />
        <span className="label !text-ink">{label}</span>
      </h2>
      {note ? <span className="label hidden sm:block">{note}</span> : null}
    </Reveal>
  );
}
