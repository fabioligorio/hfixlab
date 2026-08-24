import Image from "next/image";
import Link from "next/link";

export function BrandMark() {
  return (
    <Link className="brand-mark" href="/" aria-label="HFix Lab">
      <Image
        src="/images/hfix-logo-simple.png"
        alt="HFix Lab"
        width={252}
        height={128}
        priority
      />
    </Link>
  );
}
