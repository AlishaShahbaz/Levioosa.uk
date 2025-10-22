import Image from "next/image"

export function Logo({ className }: { className?: string }) {
  return (



    <Image
      src="/images/Black_and_Cream_Beauty_and_Fashion_Logo-removebg-preview.png"
      alt="Levioosa Logo"
      width={120}
      height={0}
      className={className}
      style={{ objectFit: "contain" }}
      priority

    />
  )
}
