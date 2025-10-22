import { Text } from '@/components/text'
import { VectorArrowDown3 } from '@/components/vector-arrow-down'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'

interface TProductFaq {
  question: string
  answer: string
}

const faqs_demo = [
  {
    question: 'What makes Leviosa jackets different from other brands?',
    answer: 'Leviosa jackets combine style, comfort, and sustainability, offering timeless designs suitable for everyone.',
  },
  {
    question: 'What materials are used in Leviosa jackets?',
    answer: 'We use eco-friendly materials like organic cotton and recycled polyester for durability and comfort.',
  },
  {
    question: 'Are Leviosa jackets suitable for all weather conditions?',
    answer: 'Yes, our jackets are versatile and designed for mild to cold climates with weather-resistant features.',
  },
  {
    question: 'How do I care for my Leviosa jacket?',
    answer: 'Wash gently or dry clean, following the care label instructions for best results.',
  },
  {
    question: 'Are Leviosa jackets available in different sizes?',
    answer: 'Yes, we offer sizes XS to XXL. Check our size guide for the best fit.',
  },
]

interface ProductFaqsSectionProps {
  className?: string
  faqs?: TProductFaq[]
  imageSrc?: string
  imageAlt?: string
}

const ProductFaqsSection = ({ className, faqs = faqs_demo, imageAlt, imageSrc }: ProductFaqsSectionProps) => {
  return (
    <div className={clsx('flex flex-col-reverse justify-between gap-8 lg:flex-row', className)}>
      <div className="relative flex-1/2 2xl:flex-3/7">
        <Image
          src={imageSrc || '/images/hijab/feature-1-2.png'}
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
                  <Text className="max-w-md text-zinc-600">{faq.answer}</Text>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ProductFaqsSection
