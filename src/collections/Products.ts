import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
  ],
}
