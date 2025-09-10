import { CollectionConfig } from 'payload'

export const PagesTemplates: CollectionConfig = {
  slug: 'pagetemplate',
  admin: {
    useAsTitle: 'Template_Name',
  },
  fields: [
    {
      name: 'Template_Name',
      type: 'text',
    },
    {
      name: 'Template_Type',
      type: 'relationship',
      relationTo: 'templatecategories',
      hasMany: true,
    },
    {
      name: 'Template_Code',
      type: 'json',
    },
  ],
}
