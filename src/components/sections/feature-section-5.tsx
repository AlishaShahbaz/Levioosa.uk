import Image from 'next/image'
import { Heading } from '../heading'
import { Text } from '../text'

interface FeatureSection5Props {
  className?: string
}

const FeatureSection5 = ({ className }: FeatureSection5Props) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-12">
        <div className="col-span-12 flex flex-col justify-between bg-[#ECFF9F] sm:col-span-6 xl:col-span-4">
          <div className="max-w-md p-6 pb-0 lg:p-10 lg:pb-0">
            <Heading fontSize="text-4xl/none sm:text-5xl/none xl:text-6xl/none 2xl:text-7xl/none">
              Effortless, Conscious, Confidence.
            </Heading>
          </div>
          <Image
            src={'/images/circle-line.png'}
            alt="circle-line"
            width={643}
            height={494}
            className="h-auto w-full"
            priority
          />
          <div className="max-w-md p-6 pt-0 lg:p-10 lg:pt-0">
            <Text>Timeless pieces crafted with care — blending comfort, quality, and modern style for those who move with purpose.</Text>
          </div>
        </div>
        <div className="relative col-span-12 aspect-square sm:col-span-6 sm:aspect-[unset] xl:col-span-4">
          <Image
            src={'/images/skincare/herono1.png'}
            alt="hero"
            className="object-cover object-center"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
          />
        </div>
        <div className="col-span-12 grid grid-cols-2 xl:col-span-4 xl:block">
          <div className="col-span-2 sm:col-span-1 xl:col-[unset]">
            <Image
              src={'/images/skincare/corduroy-6.jpg'}
              alt="feature"
              width={640}
              height={599}
              className="h-auto w-full object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
              priority
            />
          </div>
          <div className="col-span-2 max-w-xl px-6 pt-10 pb-7 sm:col-span-1 lg:px-10 xl:col-[unset]">
            <Heading>
              True Craftsmanship. <br />
              <span data-slot="italic"> Radical</span> Results.
            </Heading>
            <Text className="mt-7">
              Authentic Results.
              Designed with honesty and precision, every Levioosa piece delivers real style with real impact.
            </Text>




          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection5
