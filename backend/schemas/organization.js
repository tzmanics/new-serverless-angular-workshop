export default {
  name: 'organization',
  title: 'Organization',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'website',
      title: 'Webstie',
      type: 'url'
    },
    {
      name: 'defaultVariant',
      title: 'Default variant',
      type: 'organizationVariant',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'category' },
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
    }
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};