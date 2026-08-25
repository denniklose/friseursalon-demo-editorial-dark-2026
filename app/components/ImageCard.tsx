import Image from "next/image";
import type { ImageAsset } from "../../config/salon";

type ImageCardProps = { image: ImageAsset; className?: string; priority?: boolean; sizes?: string };

export default function ImageCard({ image, className = "", priority = false, sizes = "100vw" }: ImageCardProps) {
  return <figure className={`look-card ${className}`.trim()}><Image src={image.src} alt={image.alt} fill priority={priority} sizes={sizes} /><figcaption><strong>{image.caption}</strong></figcaption></figure>;
}
