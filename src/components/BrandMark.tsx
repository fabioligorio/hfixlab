import Link from "next/link";

export function BrandMark() {
  return (
    <Link className="brand-mark" href="/" aria-label="HFix Lab">
      <span className="brand-icon" aria-hidden="true">
        H
      </span>
      <span>
        <strong>HFix</strong>
        <small>Lab</small>
      </span>
    </Link>
  );
}
