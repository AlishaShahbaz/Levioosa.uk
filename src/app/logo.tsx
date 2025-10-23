import Image from "next/image"

export function Logo({ className }: { className?: string }) {
  return (



    <Image
      src="/images/skincare/Logo-La.jpg"
      alt="Levioosa Logo"
      width={120}
      height={0}
      className={className}
      style={{ objectFit: "contain" }}
      priority

    />
  )
}
