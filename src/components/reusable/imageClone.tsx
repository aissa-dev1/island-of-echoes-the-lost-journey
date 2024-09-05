import { cn } from "../../utils/cn";

interface Props {
  src: string;
  alt: string;
  inImgClasses?: string;
  outImgClasses?: string;
}

export default function ImageClone({
  src,
  alt,
  inImgClasses = "",
  outImgClasses = "",
}: Props) {
  return (
    <div class="relative">
      <img
        src={src}
        alt={alt}
        class={cn(
          "w-[calc(100%-50px)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg z-10 lg:w-1/4",
          outImgClasses
        )}
      />
      <img
        src={src}
        alt={alt}
        class={cn("w-full blur-sm lg:h-[350px]", inImgClasses)}
      />
    </div>
  );
}
