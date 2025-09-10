import { CollectionConfig } from 'payload'

export const SinglePageTemplates: CollectionConfig = {
  slug: 'singlepagetemplate',
  admin: {
    useAsTitle: 'template_Name',
  },
  fields: [
    {
      name: 'template_Name',
      type: 'text',
    },
    {
      name: 'template_Type',
      type: 'relationship',
      relationTo: 'templatecategories',
      hasMany: true,
    },
    {
      name: 'template_Code',
      type: 'json',
    },
  ],
}
