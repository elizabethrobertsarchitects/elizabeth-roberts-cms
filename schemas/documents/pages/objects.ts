const objectPage = {
  name: 'objectPage',
  type: 'object',
  fields: [
    {
      type: 'array',
      name: 'headerGallery',
      of: [
        {
          name: 'featuredObject',
          type: 'object',
          fields: [
            {
              name: 'objectReference',
              type: 'reference',
              to: [{type: 'objectItem'}],
            },
            {
              name: 'alternateImage',
              type: 'customImage',
            },
          ],
          preview: {
            select: {
              title: 'objectReference.title',
              mainImage: 'objectReference.mainImage',
              alternateImage: 'alternateImage',
            },
            prepare(data: any) {
              return {
                title: data.title ? data.title : 'Object',
                media: data.alternateImage?.image
                  ? data.alternateImage.image
                  : data.mainImage?.image,
              }
            },
          },
        },
      ],
    },
    {
      name: 'numberOfPreviewImages',
      description:
        'Number of preview images that cycle through on hover and mouse move on /objects. Default value is 3.',
      type: 'number',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Main Page',
      }
    },
  },
}

export default objectPage
