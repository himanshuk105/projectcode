import { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'Business Name',
  },
  fields: [
    { name: 'Business Name', type: 'text' },
    {
      name: 'Websites',
      type: 'relationship',
      relationTo: 'websites',
      hasMany: true,
    },
  ],
}
