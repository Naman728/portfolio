import { getImgPath } from "@/utils/image";
import Image from "next/image";

type ProfilePhotoProps = {
  className?: string;
  priority?: boolean;
};

export function ProfilePhoto({ className = "", priority = false }: ProfilePhotoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-softGray ${className}`}
      style={{ aspectRatio: "340 / 420" }}
    >
      <Image
        src={getImgPath("/images/home/banner/banner-img.png")}
        alt="Naman Anand"
        fill
        priority={priority}
        sizes="(max-width: 1024px) 280px, 380px"
        className="object-cover object-[center_18%]"
      />
    </div>
  );
}
