import Image from "next/image";
import Link from "next/link";

export function BrandMark() {
  return (
    <Link className="brand-mark" href="/" aria-label="HFix Lab">
      <Image
        src="/images/hfix-symbol-transparent.png"
        alt=""
        width={367}
        height={407}
        priority
      />
      <span>
        <strong>HFix</strong>
        <em>Lab</em>
      </span>
    </Link>
  );
}
