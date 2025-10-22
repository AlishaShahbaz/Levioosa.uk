import FeatureSection1 from '@/components/sections/feature-section-1'
import FeatureSection2 from '@/components/sections/feature-section-2'
import FeatureSection5 from '@/components/sections/feature-section-5'
import HeroSection2 from '@/components/sections/hero-section-2'
import SectionCollectionCarousel from '@/components/sections/section-collection-carousel'
import SectionProductCarousel from '@/components/sections/section-product-carousel'
import { getCollections, getGroupCollections } from '@/data'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Levioosa',
  description:
    'Discover the latest trends in skincare and beauty with our curated collection of products, tips, and more.',
}

export default async function Home() {
  let collections = await getCollections('skincare')
  let groupCollections = await getGroupCollections('skincare')

  return (
    <div>
      <HeroSection2 />

      <SectionCollectionCarousel className="container mt-20 sm:mt-28 lg:mt-28" groupCollections={groupCollections} />

      <FeatureSection1
        className="container mt-24 sm:mt-28 lg:mt-40"
        image1={{
          src: '/images/skincare/puffer1.jpg',
          width: 325,
          height: 335,
          alt: '',
        }}
        image2={{
          src: '/images/skincare/puffer1.jpg',
          width: 495,
          height: 530,
          alt: '',
        }}
        heading={`Elevate, Beyond Ordinary. <span data-slot="italic">Levioosa.</span>`}
      />

      <FeatureSection5 className="mt-24 sm:mt-28 lg:mt-40" />

      {collections
        ?.filter((_, i) => i < 3)
        .map((collection, index) => (
          <SectionProductCarousel
            key={collection.handle}
            className={clsx('container', index === 0 ? 'mt-44' : 'mt-36')}
            products={collection.products}
            collectionTitle={collection?.title}
            collectionHandle={collection?.handle}
            collectionDescription={collection?.description}
          />
        ))}

      <FeatureSection2
        className="container mt-20 sm:mt-28 lg:mt-32"
        variant="up"
        heading={`Refined, Conscious, Confident <span data-slot="italic">Levioosa.</span>`}
        faqs={[
          {

            question: 'EFFORTLESS ELEGANCE',
            answer:
              "Timeless designs made for everyday sophistication — where style meets substance.",
          },
          {


            question: 'PURE CRAFTSMANSHIP,',
            answer:
              'Every thread, every cut — perfected with care and precision for the modern you.',
          },
          {



            question: 'CONSCIOUS & RESPONSIBLE',
            answer:
              "Ethically crafted pieces designed to last — because true style respects both people and the planet.",
          },
          {
            

            question: 'VERSATILE & IMPACTFUL',
            answer:
              'From day to night, Levioosa adapts effortlessly — redefining comfort, confidence, and individuality.',
          },
        ]}
        image={{
          src: '/images/skincare/corduroy-6.jpg',
          width: 662,
          height: 653,
          alt: 'skincare-feature-3',
        }}
      />
    </div>
  )
}
