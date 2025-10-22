import { Heading } from '@/components/heading'
import clsx from 'clsx'
import Image from 'next/image'

interface ProductDetailContentProps {
  className?: string
  content: string
  imageSrc?: string
  imageAlt?: string
}

const ProductDetailContent = ({ content, className, imageAlt, imageSrc }: ProductDetailContentProps) => {
  return (
    <div className={clsx('max-w-none', className)}>
      <div className="flex flex-col-reverse justify-between gap-14 lg:flex-row lg:gap-12 xl:gap-20 2xl:gap-32">
        <div className="flex flex-3/7">
          <Image
            src={'/images/skincare/IMG_4086_2.jpg'}
            width={494}
            height={529}
            alt={imageAlt || 'product-detail-content'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="w-full object-cover"
          />
        </div>

        <div className="flex flex-4/7 flex-col gap-5 lg:gap-10 2xl:gap-14">
          <Heading>
            <span>About </span>
            <br />
            <span data-slot="italic">Leviosa Jackets</span>
          </Heading>

          <div
            className="max-w-xl leading-relaxed"
          // dangerouslySetInnerHTML={{ __html: content }}
          >
            {/* this is demo -- you need to use the dangerouslySetInnerHTML={{ __html: content }} */}
            <div className="space-y-8">
              <div>
                <p>
                  Levioosa is where timeless style meets unparalleled comfort. We believe that jackets should be more than just outerwear—they should be a statement of who you are. Designed for the modern, confident individual, Leviosa jackets are the perfect blend of sophistication and functionality, offering a versatile, unisex collection that suits every lifestyle.
                </p>
              </div>
              <div>
                <p className="mb-3 text-sm text-zinc-500 uppercase">Product Details</p>
                <ul className="list-inside list-disc *:marker:text-zinc-300">
                  <li>Eco-friendly design using sustainable materials.</li>
                  <li>Designed with care using environmentally friendly, sustainable materials.</li>
                  <li>Focused on sustainability with eco-friendly fabrics and practices.</li>
                  <li>Built using green materials with a sustainable production approach.</li>
                  <li>Eco-conscious and sustainably made jackets.</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm text-zinc-500 uppercase">Product Features</p>
                <ul className="list-inside list-disc *:marker:text-zinc-300">
                  <li><b>Unisex Fit</b> Designed to suit all genders comfortably.</li>
                  <li><b>Breathable Fabrics </b>
                    Stay cool and comfortable all day.</li>
                  <li><b>Lightweight yet Durable </b>
                    Warm, strong, and easy to layer.</li>
                  <li><b>Versatile Styles </b>
                    Fits both casual and formal looks.</li>
                  <li><b>Eco-Conscious </b>
                    Made with sustainable, eco-friendly materials.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailContent
