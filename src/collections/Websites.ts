import { CollectionConfig } from 'payload'

export const Websites: CollectionConfig = {
  slug: 'websites',
  admin: {
    useAsTitle: 'domain_name',
  },
  fields: [
    { name: 'domain_name', type: 'text' },
    { name: 'Page Data', type: 'json' },
  ],
}
