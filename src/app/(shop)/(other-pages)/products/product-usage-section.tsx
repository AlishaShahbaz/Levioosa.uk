import { Text } from '@/components/text'
import { VectorArrowDown3 } from '@/components/vector-arrow-down'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'

const demo_faqs = [
  {
    question: 'Spot Clean First',
    answer:
      "For light marks or spills, gently clean the area with a damp cloth and mild soap. No need to over-wash — this helps preserve the jacket’s fabric, structure, and finish. <br /> <br /> ✅ Gentle is always better  <br /> ❌ No bleach or harsh chemicals ",
  },
  {
    question: 'Machine Wash (When Needed)',
    answer:
      "If a full clean is required, turn the jacket inside out and machine wash on a gentle cycle with cold water.<br /> <br />🔁 Wash separately<br /> 🧴 Use mild detergent only",
  },
  {
    question: 'Air Dry Only',
    answer:" Avoid dryers — high heat can warp the fabric and ruin detailing. Instead, hang the jacket in a well-ventilated area to air dry naturally.<br /> <br /> ⚠️ No tumble drying <br/>🌤️ Keep out of direct sunlight to prevent color fading",
  },
  {
    question: 'Ironing & Steaming',
    answer:"Hang your jacket on a wide or padded hanger to maintain its shape. Store in a cool, dry place away from moisture and strong odors.<br /> <br />🧊 Low heat only<br />❌ No direct contact with reflective prints or logo patches",
  }
  ]

interface ProductUsageSectionProps {
  className?: string
  imageSrc?: string
  imageAlt?: string
  faqs?: {
    question: string
    answer: string
  }[]
}

const ProductUsageSection = ({ className, imageAlt, imageSrc, faqs = demo_faqs }: ProductUsageSectionProps) => {
  return (
    <div className={clsx('flex flex-col-reverse justify-between gap-8 lg:flex-row', className)}>
      <div className="relative flex-1/2 2xl:flex-3/7">
        <Image
          src={imageSrc || '/images/hijab/product-detail-img.webp'}
          width={662}
          height={653}
          alt={imageAlt || 'product-faqs'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        <VectorArrowDown3 className="absolute start-full top-full hidden -translate-x-1/5 -translate-y-full lg:block xl:top-[96%]" />
      </div>

      <div className="relative flex flex-1/2 justify-center 2xl:flex-4/7">
        <div className="w-full max-w-lg self-start">
          <dl className="divide-y divide-zinc-900/10">
            {faqs.map((faq, index) => (
              <Disclosure defaultOpen={index === 0} key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full justify-between text-start">
                    <Text className="font-medium">{faq.question}</Text>
                    <span className="ms-6 self-center text-zinc-600 dark:text-zinc-400">
                      <PlusIcon aria-hidden="true" className="size-4 group-data-open:hidden" />
                      <MinusIcon aria-hidden="true" className="size-4 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-3">
                  <Text className="max-w-md text-zinc-600" dangerouslySetInnerHTML={{ __html: faq.answer }}></Text>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ProductUsageSection
