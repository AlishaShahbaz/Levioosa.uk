import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

const Page = () => {
  return (
    <div className="container mt-16 pb-16 sm:mt-24 lg:mt-28">
      {/* SECTION1 */}
      <div className="flex flex-col justify-between gap-8 overflow-hidden lg:flex-row lg:gap-6 xl:gap-2.5">
        <div className="flex flex-2/3 flex-col gap-20 md:gap-24 lg:gap-28 xl:gap-32">
          <div className="relative">
            <Heading level={1} fontSize="text-7xl lg:text-8xl 2xl:text-9xl font-medium" className="relative w-fit">
              <span>About </span>
              <span data-slot="italic">US</span>

              <VectorArrowDown2 className="absolute -end-32 top-1/2 hidden h-20 sm:block sm:h-32 lg:-end-16 2xl:top-2/3" />
            </Heading>
          </div>

          <div className="mt-auto flex flex-col gap-8 sm:flex-row lg:gap-6 xl:gap-2.5">
            <div className="flex-1/2 xl:flex-1/3">
              <Image
                src={'/images/skincare/cotton-4.jpg'}
                width={494}
                height={529}
                alt={'feature-1-2'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>





            <div className="flex flex-1/2 sm:justify-center xl:flex-2/3">
              <div className="max-w-sm self-end">
                <Text>
                 At Levioosa, we’re not just a brand – we’re a movement. Our jackets blend style, comfort, and sustainability, combining classic elegance with modern trends.
                </Text>
                <br />
                <Text>
                  Our philosophy is simple: create jackets that reflect your style and values. With a team of skilled designers, we focus on premium, eco-friendly materials to deliver luxury with purpose. Every jacket isn’t just a statement, but a step toward a sustainable future.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1/3">
          <Image
            src={'/images/skincare/cotton-3.jpg'}
            width={494}
            height={529}
            alt={'feature-1-2'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="mt-24 sm:mt-28 lg:mt-40">
        <Heading level={2} bigger>
         The <span data-slot="italic">Levioosa</span>  <br />
           Story 
        </Heading>
        <div className="mt-14 flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex-4/9">
            <div className="">
              <Image
                src={'/images/skincare/cotton-1.jpg'}
                width={700}
                height={440}
                alt={'feature-1-2'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="flex-5/9 self-end">
            <div className="mx-auto max-w-sm">
              <Text className="mt-8">
                From humble beginnings to becoming a leading name in fashion, <b>Levioosa</b> is built on the legacy of over 20 years of expertise in design and innovation. We are committed to producing pieces that aren't just fashion-forward but also leave a positive impact on the planet.
              </Text>


              <div className="mt-24">
                <Heading>
                  <span>Designed with purpose, crafted for impact</span>
                  {` `}
                  <span data-slot="dim">years</span>
                </Heading>
                <Text className="mt-8">
                  Each Levioosa jacket blends bold design with mindful choices—because fashion should mean more.
                </Text>
              </div>

              <div className="mt-11">
                <Heading >
                  <span>Wear the change – responsibly made</span>
                  {` `}
                  <span data-slot="dim">clients</span>
                </Heading>
                <Text className="mt-8">From fabric to finish, we choose sustainable methods so you can wear your values.</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
