/**
 * Page gutter. Every section uses this so the grid stays true edge to edge.
 *
 * Full bleed on purpose: no max width, and the same narrow gutter the reference
 * site uses (16px, 24px from `md`). Widen these two values and the whole site
 * moves together.
 */
export function Shell({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: React.HTMLAttributes<HTMLElement> & {
  as?: "div" | "section" | "header" | "footer";
}) {
  return (
    <Tag className={`mx-auto w-full px-4 md:px-6 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
