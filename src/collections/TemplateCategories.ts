import { CollectionConfig } from 'payload'

export const TemplateCatgeories: CollectionConfig = {
  slug: 'templatecategories',
  admin: {
    useAsTitle: 'slug',
  },
  fields: [
    {
      name: 'Category Name',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
    },
  ],
}
