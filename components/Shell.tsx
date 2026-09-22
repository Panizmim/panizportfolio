/** Page gutter. Every section uses this so the grid stays true edge to edge. */
export function Shell({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: React.HTMLAttributes<HTMLElement> & {
  as?: "div" | "section" | "header" | "footer";
}) {
  return (
    <Tag className={`mx-auto w-full max-w-shell px-6 md:px-10 lg:px-14 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
