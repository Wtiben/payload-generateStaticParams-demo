import configPromise from '@payload-config'
import { getPayload } from 'payload'

type Params = {
  slug: string
}

type Props = {
  params: Promise<Params>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const products = await payload.find({
    collection: 'products',
  })

  return products.docs.map<Params>((product) => ({
    slug: product.slug!,
  }))
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'products',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const product = result.docs[0]

  return (
    <>
      <div>Slug: {slug}</div>
      <div>ID: {product?.id}</div>
    </>
  )
}
