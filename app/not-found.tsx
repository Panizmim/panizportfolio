import Link from "next/link";
import { Shell } from "@/components/Shell";

export default function NotFound() {
  return (
    <Shell className="py-32">
      <p className="label">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tightest">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-8">
        <Link href="/" className="link-rule font-display text-sm">
          <span aria-hidden="true">←</span> Back to the portfolio
        </Link>
      </p>
    </Shell>
  );
}
