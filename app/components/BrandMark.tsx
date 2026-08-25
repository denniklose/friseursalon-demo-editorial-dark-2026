import Image from "next/image";
import { salonConfig } from "../site-data";

type BrandMarkProps = { className?: string; sizes?: string };

export default function BrandMark({ className, sizes = "44px" }: BrandMarkProps) {
  return <span className={className} aria-hidden="true"><Image src={salonConfig.logo.src} alt="" width={44} height={44} sizes={sizes} /></span>;
}
