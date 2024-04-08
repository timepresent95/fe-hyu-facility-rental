import Image from "next/image";

export default function ImageComponent({
  src,
  width,
  height,
  alt,
  priority = false,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
}) {
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE;
  return (
    <Image
      src={`${imageUrl}/${src}`}
      width={width}
      height={height}
      alt={alt}
      priority={priority}
    />
  );
}
